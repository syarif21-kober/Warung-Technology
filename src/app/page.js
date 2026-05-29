import Image from "next/image";
import DataImage from "@/data/data";
import Heroinfo from "@/components/Heroinfo";
import Link from "next/link";

export default function Home() {

  return (
    <>  
    <div className="py-20">
      <h1 className="text-6xl/tight text-center">
        Atasi Masalah dan kebutuhan Teknologi <br />
        Anda Bersama Kami.</h1>
    </div>
    <div className="max-w-5xl mx-auto relative">
    <Image src={DataImage.Hero} alt="Hero Image"/>
    <Heroinfo />
    </div>
 {/* Layanan */}
 <div className="mt-32" id="layanan">
      <h1 className="text-4xl/normal text-center font-semibold">Layanan Istimewah Kami</h1>
      <p className="text-base/loose text-center">Masalah anda selesai kami pun Senang.</p>
    <div className="mt-20 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
      <div className="shadow-2xl p-7 rounded-2xl">
      <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
      <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Bersaing</p>
      <p className="text-base/loose">Harga Menyesuaikan dengan kebutuhan dan anda akan mendapatkan harga terbaik.</p>
    </div>
    <div className="shadow-2xl p-7 rounded-2xl">
      <i className="ri-service-fill ri-3x text-slate-700"></i>
      <p className="font-semibold text-2xl/normal mb-2">Service Terbaik</p>
      <p className="text-base/loose">Tenaga Professional yang sudah berkarir lebih 8 tahun pada dunia Technology.</p>
      <p className="text-base/loose">Bisa konsultasikan dengan kami apa yang anda butuhkan kami selalu Welcome.</p>
    </div>
    <div className="shadow-2xl p-7 rounded-2xl">
      <i className="ri-star-s-fill ri-3x text-slate-700"></i>
      <p className="font-semibold text-2xl/normal mb-2">Rating</p>
      <p className="text-base/loose">Customer kami merasa puas dengan layanan kami yang Cepat, Tepat dan Selamat.</p>
    </div>
    </div>
    </div>
    {/* Proyek */}
    <div className="mt-32" id="proyek">
      <h1 className="text-4xl/normal text-center font-semibold">Proyek Kami</h1>
      <p className="text-base/loose text-center">Kami Menyelesaikan Proyek dengan professional dengan metode efiesien.</p>
    
    <div className="mt-20 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1"> 
    <div className="shadow-2xl p-4 rounded-2xl">
        <Image src={DataImage.Proyek1} alt="Proyek Image" className="rounded-tl-2x1 rounded-tr-2x1"/>
        <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Pertama</h1>
        <p className="text-base/loose">Service Laptop dan Komputer</p>
    <div className="mt-6 mb-3 font-semibold">
      <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Proyek</Link>
      </div>  
    </div>
   <div className="shadow-2xl p-4 rounded-2xl">
        <Image src={DataImage.Proyek2} alt="Proyek Image" className="rounded-tl-2x1 rounded-tr-2x1"/>
        <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Kedua</h1>
        <p className="text-base/loose">Perancangan dan Konfigurasi Jaringan</p>
    <div className="mt-6 mb-3 font-semibold">
      <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Proyek</Link>
      </div>  
    </div>
    <div className="shadow-2xl p-4 rounded-2xl">
        <Image src={DataImage.Proyek3} alt="Proyek Image" className="rounded-tl-1x1 rounded-tr-2x1"/>
        <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Ketiga</h1>
        <p className="text-base/loose">Pengadaan Laptop, Komputer, Server dan Jaringan</p>
    <div className="mt-6 mb-3 font-semibold">
      <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Proyek</Link>
      </div>  
    </div>
    </div>
    </div>
     {/* Kontak */}
      <div className="mt-32" id="kontak">
      <h1 className="text-4xl/normal text-center font-semibold">Hubungi kami</h1>
      <p className="text-base/loose text-center">Utamakan Konsultasikan Masalah anda pada kami</p>
    <div className="mt-20 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
      <div className="shadow-2xl p-7 rounded-2xl">
      <i className="ri-road-map-line ri-3x text-slate-700"></i>
      <p className="font-semibold text-2xl/normal mb-2">Alamat</p>
      <p className="text-base/loose">Jl. Kober Sawah, RT.002/rw016/RW.no.111, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat.</p>
      <Link href="https://maps.app.goo.gl/csJ4EniefmbhqAKJ9" className="text-base/loose">Klik Disini Maps</Link>
    </div>
    <div className="shadow-2xl p-7 rounded-2xl">
      <i className="ri-whatsapp-fill ri-3x text-slate-700"></i>
      <p className="font-semibold text-2xl/normal mb-2">Whatsaap</p>
      <p className="text-base/loose">Konsultasikan Kendala anda pada kami, untuk Solving lebih cepat.</p>
      <Link href="https://wa.me/6287884071946" className="text-base/loose">Klik Disini Whatsaap</Link>
    </div>
    <div className="shadow-2xl p-7 rounded-2xl">
      <i className="ri-star-s-fill ri-3x text-slate-700"></i>
      <p className="font-semibold text-2xl/normal mb-2">Visit</p>
      <p className="text-base/loose">Kami Menyediakan layanan Visit Untuk Weekend dan After Office</p>
      <p className="text-base/loose">Untuk Area Jakarta, Depok, Bogor dan Sekitarnya</p>
    </div>
    </div>
    </div>
    </>
  );
};
