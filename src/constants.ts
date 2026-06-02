import type { Project, Writing } from './types';

export const OWNER = {
  name: "Aren",
  role: "Penyair, Pengarsip Rasa & Penjelajah Kata",
  bio: "Seorang anak sastra yang berjalan di antara rintik hujan dan baris-baris puisi. Menghabiskan waktu dengan melamun di sudut perpustakaan, mengumpulkan serpihan ingatan, dan menenunnya menjadi prosa, esai, serta pementasan yang merayakan kesunyian manusia.",
  email: "aren@ruangsunyi.com",
  github: "https://github.com/Arennbukangula",
  linkedin: "https://linkedin.com/in/aren-sastra",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Membasuh Luka di Tepian Waktu: Sebuah Antologi Zine Kolektif",
    description: "Proyek kurasi puisi dan prosa pendek independen yang dicetak terbatas, meraba tema kehilangan dan penerimaan.",
    longDescription: "Zine ini adalah ruang fisik alternatif bagi para penulis muda untuk menyuarakan hal-hal yang sering kali tersendat di tenggorokan. Saya bertindak sebagai kurator sekaligus penyunting utama, mengumpulkan puluhan naskah dari penjuru kota, merajutnya ke dalam tata letak yang intim, dan mendistribusikannya secara mandiri dari tangan ke tangan di kedai kopi dan taman kota.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800", // Gambar estetis kertas/menulis
    technologies: ["Kurasi Sastra", "Penyuntingan Teks", "Penerbitan Mandiri", "Sastra Cetak"],
    link: "https://instagram.com/proyek-zine-kamu",
    github: "https://github.com/Arennbukangula/zine-luka",
  },
  {
    id: 2,
    title: "Riuh di Dalam Kepala: Pementasan Monolog dan Pembacaan Puisi",
    description: "Adaptasi panggung intim yang menerjemahkan kesunyian teks tertulis menjadi gerak dan suara.",
    longDescription: "Sebuah eksperimen untuk membawa puisi keluar dari halaman kertas yang sunyi menuju ruang publik yang hidup. Proyek ini memadukan pembacaan puisi teatrikal dengan latar suara ambient minimalis. Membawakan karya-karya orisinal dan beberapa gubahan dari sastrawan klasik Indonesia, mengeksplorasi bagaimana intonasi dan jeda mampu mengubah makna sebuah diksi.",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800", // Gambar panggung/remang-remang
    technologies: ["Seni Pertunjukan", "Adaptasi Naskah", "Penyutradaraan", "Eksplorasi Teatrikal"],
  },
];

export const writings: Writing[] = [
  {
    id: 1,
    title: "Catatan Singkat Tentang Menunggu Hujan Reda di Kedai Tua",
    excerpt: "Sebuah prosa melankolis mengenai waktu yang berjalan lambat, secangkir kopi yang mendingin, dan ingatan yang menolak pudar.",
    content: "Jendela kaca di kedai ini selalu punya cara sendiri untuk melukis kesedihan. Rintik hujan sore itu jatuh seperti bait puisi yang ditulis terburu-buru oleh langit. Kamu tidak datang, dan aku tidak benar-benar menunggu. Di atas meja, selembar kertas tisu telah penuh dengan coretan pena yang tintanya mulai meleber, mengeja sebuah nama yang perlahan-lahan asing...",
    date: "2026-04-10",
    readTime: "4 min",
    link: "https://medium.com/@Arennbukangula/menunggu-hujan-reda",
  },
  {
    id: 2,
    title: "Melankolia Kota dan Manusia-Manusia yang Terasing dalam Puisi",
    excerpt: "Esai kritik sastra yang menelisik bagaimana ruang-ruang urban mengikis kehangatan dan menciptakan sekat sunyi di antara kita.",
    content: "Kota besar tidak pernah benar-benar tidur, namun ia sering kali melahirkan manusia-manusia yang berjalan dalam mimpi. Dalam esai ini, saya membedah beberapa karya penyair kontemporer yang menangkap fenomena keramaian kota sebagai bentuk kesepian yang paling bising. Melalui sudut pandang sosiologi sastra, kita melihat bagaimana beton-beton jalanan perlahan menggantikan fungsi pelukan...",
    date: "2026-05-25",
    readTime: "6 min",
  },
];