import classnames from "classnames"
import React, { useState, useCallback } from "react";
import PropTypes from "../util/PropTypes"
import * as styles from "./GalleryCard.module.scss"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryCard = ({ children, photos, }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className={classnames([styles.container])}>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
            {children}
        </div>

    )
}

GalleryCard.propTypes = {
    children: PropTypes.node,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired,
    enableImageSelection: PropTypes.bool
}

GalleryCard.defaultProps = {
    children: null,
    enableImageSelection: false
}

export default GalleryCard
