import React from "react";
import Image from 'next/image';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return(
        <>
            <div className="container-fluid" id="header">
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-2 pt-1 ps-4" id="header-logo">
                                <Image
                                    alt="Logo Polban"
                                    src="/Logo Polban.png"
                                    width={30}
                                    height={40}
                                />
                            </div>
                            <div className="col-10 pt-1" id="website-name">
                                <Link href="/"><a> JTK Polban </a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-8" id="header-nav">
                        <nav className="navbar navbar-expand-lg  float-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toogle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Tentang JTK
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link href="/profil-jurusan"><a className="dropdown-item">Profil Jurusan</a></Link></li>
                                            <li><Link href="/profil-d3"><a className="dropdown-item">Profil Prodi D3</a></Link></li>
                                            <li><Link href="/profil-d4"><a className="dropdown-item">Profil Prodi D4</a></Link></li>
                                            <li><Link href="/"><a className="dropdown-item">Profil Pegawai Teknisi</a></Link></li>
                                            <li><Link href="/"><a className="dropdown-item">Profil Dosen</a></Link></li>
                                            <li><Link href="/"><a className="dropdown-item">Kurikulum</a></Link></li>
                                            <li><Link href="/"><a className="dropdown-item">Agenda</a></Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link">Kontak</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link">Fasilitas</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/artikel"><a className="nav-link">Artikel</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link">Gallery</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link">Tracer Study</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;