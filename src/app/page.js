import Image from "next/image";
import DataImage from "@/data/data";
import Heroinfo from "@/components/Heroinfo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="beranda" className="py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            🚀 Solusi Teknologi Profesional
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Bangun Website,
            <br />
            Infrastruktur IT,
            <br />
            dan Solusi AI
            <span className="text-blue-600"> Bersama Wartech.</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Kami membantu UMKM, Startup, Sekolah, Instansi, dan Perusahaan
            dalam pengembangan website, jaringan komputer, cloud server,
            serta implementasi Artificial Intelligence.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Link
              href="/chatbot"
              className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
            >
              Coba AI Assistant
            </Link>

            <Link
              href="#kontak"
              className="border px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Konsultasi Gratis
            </Link>
          </div>

          <div className="max-w-5xl mx-auto relative mt-12">
            <Image
              src={DataImage.Hero}
              alt="Hero Image"
              className="rounded-3xl shadow-2xl"
            />
            <Heroinfo />
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="mt-10">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="text-gray-500">Project Selesai</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">8+</h2>
            <p className="text-gray-500">Tahun Pengalaman</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-gray-500">Client Terlayani</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="text-gray-500">Support</p>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="mt-32" id="layanan">
        <h1 className="text-4xl text-center font-semibold">
          Layanan Istimewa Kami
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Solusi teknologi terbaik untuk kebutuhan Anda.
        </p>

        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {[
            {
              icon: "ri-money-dollar-circle-fill",
              title: "Harga Bersaing",
              desc: "Harga menyesuaikan kebutuhan dan memberikan nilai terbaik.",
            },
            {
              icon: "ri-service-fill",
              title: "Service Terbaik",
              desc: "Pengalaman lebih dari 8 tahun di bidang teknologi dan IT.",
            },
            {
              icon: "ri-star-s-fill",
              title: "Kepuasan Pelanggan",
              desc: "Fokus pada layanan cepat, tepat dan profesional.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border p-7 rounded-2xl"
            >
              <i className={`${item.icon} ri-3x text-slate-700`}></i>
              <h3 className="font-semibold text-2xl mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-base leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROYEK */}
      <section className="mt-32" id="proyek">
        <h1 className="text-4xl text-center font-semibold">
          Proyek Kami
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Kami menyelesaikan proyek dengan metode profesional dan efisien.
        </p>

        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {[
            {
              image: DataImage.Proyek1,
              title: "Service Laptop & Komputer",
              desc: "Perawatan dan perbaikan perangkat IT.",
            },
            {
              image: DataImage.Proyek2,
              title: "Infrastruktur Jaringan",
              desc: "Perancangan dan konfigurasi jaringan perusahaan.",
            },
            {
              image: DataImage.Proyek3,
              title: "Server & Hardware",
              desc: "Pengadaan laptop, komputer, server dan jaringan.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border p-4 rounded-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-tl-2xl rounded-tr-2xl"
              />

              <h2 className="mt-6 mb-3 text-2xl font-semibold">
                {item.title}
              </h2>

              <p>{item.desc}</p>

              <div className="mt-6">
                <Link
                  href="#"
                  className="bg-slate-700 text-white p-3 rounded-xl hover:bg-slate-600 inline-block"
                >
                  Lihat Proyek
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA CHATBOT */}
      <section className="mt-32">
        <div className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Butuh Bantuan Teknologi?
          </h2>

          <p className="mt-4 text-gray-300">
            Gunakan Wartech AI Assistant untuk konsultasi instan.
          </p>

          <Link
            href="/chatbot"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Mulai Chat Sekarang
          </Link>
        </div>
      </section>

      {/* KONTAK */}
      <section className="mt-32" id="kontak">
        <h1 className="text-4xl text-center font-semibold">
          Hubungi Kami
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Konsultasikan kebutuhan teknologi Anda.
        </p>

        <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          <div className="shadow-lg border p-7 rounded-2xl">
            <i className="ri-road-map-line ri-3x text-slate-700"></i>
            <h3 className="font-semibold text-2xl mt-4 mb-2">
              Alamat
            </h3>
            <p>
              Jl. Kober Sawah, Kemiri Muka, Beji,
              Kota Depok, Jawa Barat.
            </p>
          </div>

          <div className="shadow-lg border p-7 rounded-2xl">
            <i className="ri-whatsapp-fill ri-3x text-slate-700"></i>
            <h3 className="font-semibold text-2xl mt-4 mb-2">
              WhatsApp
            </h3>

            <Link href="https://wa.me/6287884071946">
              Hubungi Sekarang
            </Link>
          </div>

          <div className="shadow-lg border p-7 rounded-2xl">
            <i className="ri-customer-service-2-fill ri-3x text-slate-700"></i>
            <h3 className="font-semibold text-2xl mt-4 mb-2">
              Visit Service
            </h3>

            <p>
              Layanan onsite untuk Jakarta, Depok,
              Bogor dan sekitarnya.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
