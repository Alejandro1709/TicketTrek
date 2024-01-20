type ShowcaseProps = {
  heading?: string;
};

function Showcase({ heading }: ShowcaseProps) {
  return (
    <section className='flex flex-col gap-4 lg:mt-16'>
      {heading ? <h2 className='text-2xl font-medium'>{heading}</h2> : null}
      <ul className='flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6'>
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
