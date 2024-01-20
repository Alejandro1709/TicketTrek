type ShowcaseProps = {
  heading?: string;
};

function Showcase({ heading }: ShowcaseProps) {
  return (
    <section className='flex flex-col gap-4 lg:mt-16'>
      {heading ? <h2 className='text-2xl font-medium'>{heading}</h2> : null}
      <ul className='flex flex-col gap-2'>
        <li className='bg-slate-300 h-[129px]'>LI</li>
        <li className='bg-slate-300 h-[129px]'>LI</li>
      </ul>
    </section>
  );
}

export default Showcase;
