import Image from 'next/image';

function Header() {
  return (
    <header className="">
      <Image
        className="object-contain"
        src="https://cdn.worldvectorlogo.com/logos/hulu.svg"
        alt="image"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
