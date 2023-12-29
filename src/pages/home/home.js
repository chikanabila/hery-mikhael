import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
    // Menampilkan halaman web
    return (
      <html lang="en">
        <Navbar />
        <head >
          <title>Penyeberangan Gilimanuk-Banyuwangi</title>
        </head>
        <body >
        
          <header >
            <h1>Kel's ferriage</h1>
            <h2>Jasa penyeberangan Gilimanuk-Banyuwangi</h2>
          </header>
  
          <section id="tentang-kami">
            <h2>Tentang Kami</h2>
            <p>
                Kel's ferriage merupakan tempat dimana anda dapat memesan tiket penyeberangan Gilimanuk-banyuwangi.
            </p>
          </section>
  
          <section id="kontak-kami">
            <h2>Kontak Kami</h2>
            <p>
                <h4>Penyebarangan Gilimanuk-Bali</h4>
                <ul>
                    <h4>Nama Pemilik: Hery Mikhael Silalahi S</h4>
                    <h4>Alamat: Gilimanuk, Bali</h4>
                    <h4>Telepon: 082340915636</h4>
                    <h4>Email: mikhaelsilalahi@gmail.com</h4>
                </ul>
            </p>
          </section>
        
        </body>
      </html>
    );
};
  
  export default Home;