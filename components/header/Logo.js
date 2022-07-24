import Link from 'next/link'

export default function Logo({ setIsMenuOpen }) {
  return (
    <Link href="/">
      <a onClick={() => setIsMenuOpen(false)}>
        <img src="/img/Logo_GKJW.jpg" alt="website logo" width="70" height="70" className="logo" />
      </a>
    </Link>
  )
}
