type ShowcaseProps = {
  heading?: string;
};

function Showcase({ heading }: ShowcaseProps) {
  return (
    <section className='flex flex-col gap-4 lg:mt-16'>
      {heading ? (
        <h2 className='lg:text-2xl text-xl font-medium'>{heading}</h2>
      ) : null}
      <ul className='flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-6'>
        <li className='bg-slate-100 border h-[129px] rounded'>LI</li>
        <li className='bg-slate-100 border h-[129px] rounded'>LI</li>
        <li className='bg-slate-100 border h-[129px] rounded'>LI</li>
        <li className='bg-slate-100 border h-[129px] rounded'>LI</li>
        <li className='bg-slate-100 border h-[129px] rounded'>LI</li>
        <li className='bg-slate-100 border h-[129px] rounded'>LI</li>
      </ul>
    </section>
  );
}

export default Showcase;
