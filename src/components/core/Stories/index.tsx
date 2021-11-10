import React, { useEffect, useRef, useState } from "react";
import {
  ProgressBar,
  ProgressBarContainer,
  ProgressBarOuter,
  StoriesInner,
  StyledStories,
  Video,
  VideoDiv,
} from "./index.style";
import { graphql, useStaticQuery } from "gatsby";
import { useInView } from "react-intersection-observer";

export interface StoriesQueryProps {
  videos: {
    nodes: {
      relativePath: string;
      videoVP9: {
        path: string;
        duration: number;
      };
      videoH265: {
        path: string;
        duration: number;
      };
    }[];
  };
}

export interface Story {
  relativePath: string;
}

export interface StoriesProps {
  stories: Story[];
  currentIndex?: number;
  onChange?: (activeStory: number) => void;
  onStoryStart?: (
    activeStory: number,
    e: React.SyntheticEvent<HTMLVideoElement>
  ) => void;
  onStoryEnd?: (
    activeStory: number,
    e: React.SyntheticEvent<HTMLVideoElement>
  ) => void;
}

const Stories = (props: StoriesProps) => {
  const [ref, inView] = useInView();
  const [paused, setPaused] = useState<boolean>(true);
  const [activeStory, setActiveStory] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const videoRefs: React.RefObject<HTMLVideoElement>[] = [];
  const { videos }: StoriesQueryProps = useStaticQuery(graphql`
    query {
      videos: allFile(filter: { sourceInstanceName: { eq: "videos" } }) {
        nodes {
          relativePath
          videoVP9 {
            path
            duration
          }
          videoH265 {
            path
            duration
          }
        }
      }
    }
  `);

  const stories = props.stories.map((story) => {
    const video = videos.nodes.find(
      (video) => video.relativePath === story.relativePath
    );

    if (video) {
      const h265Path = video.videoH265.path;
      const vp9Path = video.videoVP9.path;

      return {
        h265Path,
        vp9Path,
        duration: video.videoH265.duration,
      };
    } else {
      return null;
    }
  });

  const onVideoStart = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    props.onStoryStart && props.onStoryStart(activeStory, e);
  };

  const onVideoEnd = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setTimeout(() => {
      const nextActiveStory = (activeStory + 1) % props.stories.length;
      setActiveStory(nextActiveStory !== 0 ? nextActiveStory : -1);
      props.onStoryEnd && props.onStoryEnd(nextActiveStory, e);
      setCounter(counter + 1);
    }, 200);
  };

  useEffect(() => {
    if (props.currentIndex !== undefined) {
      videoRefs[activeStory].current?.pause();
      if (videoRefs[activeStory].current) {
        const videoRef = videoRefs[activeStory].current;
        //@ts-ignore
        videoRef.currentTime = 0;
      }
      setActiveStory(props.currentIndex);
    }
  }, [props.currentIndex]);

  useEffect(() => {
    if (activeStory !== -1) {
      if (inView) {
        videoRefs[activeStory].current?.play();
        setPaused(false);
        props.onChange && props.onChange(activeStory);
      } else {
        videoRefs[activeStory].current?.pause();
        setPaused(true);
      }
    } else {
      setActiveStory(0);
    }
  }, [activeStory, inView]);

  return (
    <StyledStories>
      <StoriesInner>
        <ProgressBarContainer>
          {stories.map((story, i) => {
            return (
              story && (
                <ProgressBarOuter key={i}>
                  <ProgressBar
                    key={i}
                    paused={paused}
                    duration={story.duration * 1000}
                    active={activeStory === i}
                    full={activeStory > i}
                    counter={counter}
                  />
                </ProgressBarOuter>
              )
            );
          })}
        </ProgressBarContainer>
        <VideoDiv ref={ref}>
          {stories.map((story, i) => {
            const isActive = activeStory === i;

            const videoRef = useRef<HTMLVideoElement>(null);
            videoRefs.push(videoRef);

            if (story) {
              return (
                <Video
                  active={isActive}
                  key={i}
                  muted
                  ref={videoRef}
                  onPlay={onVideoStart}
                  onEnded={onVideoEnd}
                  playsInline
                >
                  {story.vp9Path && (
                    <source src={story.vp9Path} type="video/webm" />
                  )}
                  {story.h265Path && (
                    <source src={story.h265Path} type="video/mp4" />
                  )}
                </Video>
              );
            }
          })}
        </VideoDiv>
      </StoriesInner>
    </StyledStories>
  );
};

export default Stories;
