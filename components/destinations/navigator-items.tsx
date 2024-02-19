type NavigatorItemsProps = {
  children: React.ReactNode;
};

function NavigatorItems({ children }: NavigatorItemsProps) {
  return (
    <ul className='flex flex-row gap-3 justify-center items-center'>
      {children}
    </ul>
  );
}

export default NavigatorItems;
