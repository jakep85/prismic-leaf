import RichText from '../../components/RichText';
import CustomLink from '../../components/CustomLink';
import { PrismicNextImage } from '@prismicio/next';

const HeroSlice = ({ slice }) => (
  <section className="flex flex-col items-center justify-center">
    {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
    <div className="relative after:bg-black after:opacity-40 after:absolute after:w-full after:h-full after:top-0 after:left-0">
      <PrismicNextImage field={slice.primary.image} className="object-cover" />
      <div className="absolute z-10 top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2">
        <RichText field={slice.primary.title} className="text-5xl font-semibold text-white" />
        <RichText field={slice.primary.description} className="text-white text-xl mt-3" />
        {slice?.items?.map((item, i) => (
          <CustomLink
            key={i}
            text={item.cta_text}
            link={item.cta_link}
            className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-md font-medium uppercase hover:text-white hover:bg-teal-500"
          />
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

export default HeroSlice;
