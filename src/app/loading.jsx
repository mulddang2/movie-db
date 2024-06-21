export default function Loading() {
  return (
    <div className='flex justify-center mt-44'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className='h-16' src='spinner.svg' alt='loading...'/>
    </div>
  );
}
