import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink } from '@prismicio/react';

const ImageGallery = ({ slice }) => (
  <section>
    {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
    {slice?.items?.map((item, i) => (
      <div>
        <PrismicLink href={item.image.url} key={i}>
          <PrismicNextImage field={item.image.mobile} className="sm:hidden" />
          <PrismicNextImage field={item.image.tablet} className="max-sm:hidden lg:hidden" />
          <PrismicNextImage field={item.image} className="max-lg:hidden" />
        </PrismicLink>
      </div>
    ))}
  </section>

  // <section>
  //   <span className="title">
  //     {slice.primary.title ? (
  //       <PrismicRichText field={slice.primary.title} />
  //     ) : (
  //       <h2>Template slice, update me!</h2>
  //     )}
  //   </span>
  //   {slice.primary.description ? (
  //     <PrismicRichText field={slice.primary.description} />
  //   ) : (
  //     <p>start by editing this slice from inside Slice Machine!</p>
  //   )}
  //   <style jsx>{`
  //     section {
  //       max-width: 600px;
  //       margin: 4em auto;
  //       text-align: center;
  //     }
  //     .title {
  //       color: #8592e0;
  //     }
  //   `}</style>
  // </section>
);

export default ImageGallery;
