import classnames from "classnames"
import React, { useState, useCallback } from "react";
import { Container } from 'react-bootstrap';
import PropTypes from "../util/PropTypes"
import * as styles from "./GalleryCard.module.scss"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import capitalize from '../util/capitalize';
import Typography from "./Typography"
const GalleryCard = ({ children, photos, theme }) => {
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
        <div className={classnames([styles.container, {
            [styles[`theme${capitalize(theme)}`]]: theme,
        },])}>
            <Container fluid="xl" className="pt-8 pb-8" >
                <div className="main-title">
                    <Typography variant='heading2'>
                        Il momento giusto é adesso.
                    </Typography>
                    <Typography variant='heading3'>
                        Non Aspettare
                    </Typography>
                </div>
                <div>
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
            </Container>


        </div>
    )
}

GalleryCard.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.string,
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number,
        }))
}

GalleryCard.defaultProps = {
    children: null,
    theme: null,
    photos: null
}

export default GalleryCard
