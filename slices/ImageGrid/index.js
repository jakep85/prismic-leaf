import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import RichText from '../../components/RichText';

/**
 * @typedef {import("@prismicio/client").Content.ImageGridSlice} ImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGridSlice>} ImageGridProps
 * @param { ImageGridProps }
 */
const ImageGrid = ({ slice }) => (
  <section className="section">
    <div className="container">
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      <RichText field={slice.primary.title} className="text-2xl" />
      <div className="grid gap-3 grid-cols-4">
        {slice?.items?.map((item, i) => (
          // <img src={item.image.url} alt={item.image.alt} />
          <PrismicNextImage field={item.image} key={i} />
        ))}
      </div>
    </div>
  </section>
  // <section>
  //   <span className="title">
  //     {
  //       slice.primary.title ?
  //       <PrismicRichText field={slice.primary.title}/>
  //       : <h2>Template slice, update me!</h2>
  //     }
  //   </span>
  //   {
  //     slice.primary.description ?
  //     <PrismicRichText field={slice.primary.description}/>
  //     : <p>start by editing this slice from inside Slice Machine!</p>
  //   }
  //   <style jsx>{`
  //       section {
  //         max-width: 600px;
  //         margin: 4em auto;
  //         text-align: center;
  //       }
  //       .title {
  //         color: #8592e0;
  //       }
  //   `}</style>
  // </section>
);

export default ImageGrid;
