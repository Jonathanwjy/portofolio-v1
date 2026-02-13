import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          education: "Education & Experience",
          tech: "Tech Stack",
          projects: "Projects",
          contact: "Contact",
        },
        hero: {
          greeting: "Hi, I'm",
          description:
            "An IT Graduate focused on Full Stack Web Development. I build maintainable, efficient, scalable, and user-friendly systems.",
          focus: "Focus",
          focusValue: "FullStack Web Development",
          viewProjects: "View Projects",
          openToWork: "Open to Work",
        },
        about: {
          title: "About",
          me: "Me",
          paragraph1:
            "Informatics graduate with a strong focus on full stack web development. Experienced in building web applications using PHP, JavaScript, MySQL, React, Tailwind CSS, and Laravel.",
          paragraph2:
            "I enjoy turning ideas and requirements into functional, well-structured systems. I am highly curious and motivated to continuously improve my skills by exploring new technologies and best practices in the web development ecosystem. In addition to technical skills, I value teamwork, clear communication, and responsibility. I am comfortable working in collaborative environments, contributing ideas, and learning from feedback. I am eager to grow as a developer and to contribute to meaningful projects that solve real-world problems.",
        },
        section: {
          education: "Education",
          experience: "Experience",
        },
        education: {
          mathScience: {
            title: "Math and Science",
            institution: "SMA Xaverius 1 Palembang",
            period: "2019 - 2022",
            description:
              "Graduated with a strong academic foundation in mathematics and science.",
          },
          informatics: {
            title: "Informatics",
            institution: "Universitas Multi Data Palembang",
            period: "2022 - 2026",
            description:
              "Graduated with a GPA of 3.66/4.00. Focused on full stack web development, data structure, and database management. Experienced in building web applications using modern frameworks while strengthening problem-solving, system design, and real-world application development skills. ",
          },
        },
        experience: {
          intern: {
            title: "Web Developer Intern",
            company: "PKBM Sekolah Bintang",
            period: "Feb 2025 - Jul 2025",
            description:
              "Developed a web-based Student Information System using Laravel and MySQL.",
          },
        },
        projects: {
          sectionTitle: "Featured Projects",
          github: "GitHub Repo",
          demo: "Live Demo",

          traho: {
            title: "Traho Journal",
            shortDesc: "Trade logging & performance tracking application.",
            description:
              "This application is designed to manage trade logging process. Traders often struggle to manage their records, such as entry reasons and daily updates. Especially when initial analyses shift due to dynamic market conditions. This app solves that problem by allowing users to append real-time analysis to their current holdings. It features a user-friendly interface with automated calculations, ensuring that all transaction history and notes are organized and easily accessible. Additionally, integrated charts provide clear data visualization, helping traders evaluate their trading performance",
          },

          wise: {
            title: "Wise University Admission",
            shortDesc: "Student admission management system.",
            description:
              "This application is a web-based Student Admission Management System designed to handle the complete new student enrollment process. When the application is first accessed, users are presented with a dashboard containing general information about the university, including announcements and admission updates. The system supports authentication with two roles: User (Applicant) and Admin.\n\nApplicants must register and login to begin the admission process. However, access to each stage is strictly controlled through an admin verification mechanism. Users are required to be verified by an admin before they apply to the university. Each stage, application submission, payment confirmation, and temporary student ID (KTM) must be reviewed and approved by an admin before the user can move forward. This sequential verification flow ensures data accuracy, prevents invalid submissions, and maintains administrative control.\n\nAdmins are responsible for user verification, registration approval, payment validation, and issuing temporary student cards. Additionally, the system provides a CRUD-based announcement management feature, allowing admins to create, update, and publish announcements dynamically",
          },

          pkbm: {
            title: "Buku Induk Siswa Sekolah Bintang",
            shortDesc: "Student master data management system.",
            description:
              "This project is a web-based information system designed to manage student master data for PKBM Sekolah Bintang, a non-formal education institution. The application was developed to replace manual record. The system allows administrators and staff to manage student profiles and academic records.\n\nThe system supports multi-role access (Super Admin, Admin, Staff). Key features include student data CRUD operations, academic score management, filtering and searching by academic year and package, and automatic generation of student reports in PDF and Word formats. The dashboard also provides statistical visualizations of student growth over time.",
          },
        },
        contact: {
          title: "Let's Connect",
          description:
            "Interested in working together or have a question about my projects? Feel free to reach out through the form or my social media.",
          follow: "Follow Me",

          form: {
            name: "Name",
            email: "Email",
            message: "Message",
            sending: "Sending...",
            send: "Send Message",
            successTitle: "Message Sent 🎉",
            successDesc: "Thanks for reaching out! I’ll get back to you soon.",
          },

          copyright: "All rights reserved.",
        },
      },
    },
    id: {
      translation: {
        nav: {
          home: "Beranda",
          about: "Tentang",
          education: "Pendidikan & Pengalaman",
          tech: "Teknologi",
          projects: "Proyek",
          contact: "Kontak",
        },
        hero: {
          greeting: "Halo, Saya",
          description:
            "Lulusan IT yang berfokus pada Full Stack Web Development. Saya membangun sistem yang efisien, scalable, dan user-friendly.",
          focus: "Fokus",
          focusValue: "FullStack Web Development",
          viewProjects: "Lihat Proyek",
        },
        about: {
          title: "Tentang",
          me: "Saya",
          paragraph1:
            "Lulusan Informatika dengan minat kuat pada full stack web development. Berpengalaman dalam membangun aplikasi web menggunakan PHP, JavaScript, MySQL, React, Tailwind CSS, dan Laravel.",
          paragraph2:
            "Saya senang mengubah ide dan kebutuhan menjadi sistem yang fungsional dan terstruktur dengan baik. Saya memiliki rasa ingin tahu yang tinggi dan motivasi untuk meningkatkan kemampuan dengan mempelajari teknologi baru dan best practices dalam ekosistem web development. Selain kemampuan teknis, saya mampu bekerja dengan baik bersama tim, komunikasi yang jelas, dan tanggung jawab. Saya ingin terus berkembang sebagai developer dan berkontribusi pada proyek yang memberikan dan memecahkan masalah yang nyata.",
        },
        section: {
          education: "Pendidikan",
          experience: "Pengalaman",
        },

        education: {
          mathScience: {
            title: "MIPA",
            institution: "SMA Xaverius 1 Palembang",
            period: "2019 - 2022",
            description:
              "Lulus dengan fondasi akademik yang kuat dalam bidang matematika dan sains.",
          },

          informatics: {
            title: "Informatika",
            institution: "Universitas Multi Data Palembang",
            period: "2022 - 2026",
            description:
              "Lulus dengan IPK 3.66/4.00. Berfokus pada full stack web development, struktur data, dan manajemen basis data. Berpengalaman dalam membangun aplikasi web menggunakan framework modern serta memperkuat kemampuan problem solving, perancangan sistem, dan pengembangan aplikasi nyata.",
          },
        },

        experience: {
          intern: {
            title: "Magang Web Developer",
            company: "PKBM Sekolah Bintang",
            period: "Feb 2025 - Jul 2025",
            description:
              "Mengembangkan Sistem Informasi Siswa berbasis web (Buku Induk Siswa) untuk mengelola data pribadi dan catatan akademik siswa menggunakan Laravel dan MySQL.",
          },
        },
        projects: {
          sectionTitle: "Proyek",
          github: "Repository GitHub",
          demo: "Demo Aplikasi",

          traho: {
            title: "Traho Journal",
            shortDesc: "Aplikasi pencatatan dan evaluasi performa trading.",
            description:
              "Aplikasi ini dirancang untuk mengelola proses pencatatan trading. Trader sering mengalami kesulitan dalam mengatur catatan mereka, seperti alasan entry dan catatan harian, terutama ketika analisis awal berubah akibat kondisi pasar yang dinamis. Aplikasi ini menyelesaikan masalah tersebut dengan memungkinkan pengguna menambahkan analisis berdasarkan tanggal pada posisi yang sedang berjalan. Aplikasi ini memiliki antarmuka yang ramah pengguna dengan perhitungan otomatis, sehingga seluruh riwayat transaksi dan catatan tersusun rapi serta mudah diakses. Selain itu, terdapat grafik visualisasi data yang jelas untuk membantu trader mengevaluasi performa trading mereka.",
          },

          wise: {
            title: "Wise University Admission",
            shortDesc: "Sistem manajemen penerimaan mahasiswa baru.",
            description:
              "Aplikasi ini merupakan Sistem Manajemen Penerimaan Mahasiswa Baru berbasis web yang dirancang untuk menangani seluruh proses pendaftaran mahasiswa baru secara menyeluruh. Saat aplikasi pertama kali diakses, pengguna akan disajikan dashboard yang berisi informasi umum mengenai universitas , termasuk pengumuman dan pembaruan terkait penerimaan mahasiswa.\n\n Sistem ini mendukung autentikasi dengan dua peran, yaitu User (Pendaftar) dan Admin. Pendaftar diwajibkan untuk melakukan registrasi dan login untuk memulai proses pendaftaran. Pengguna harus diverifikasi oleh admin sebelum dapat mengajukan pendaftaran ke universitas. Setiap tahapan, mulai dari pengisian formulir, konfirmasi pembayaran, hingga penerbitan Kartu Tanda Mahasiswa (KTM) sementara, harus ditinjau dan disetujui oleh admin sebelum pengguna dapat melanjutkan ke tahap berikutnya. Alur verifikasi berurutan ini memastikan keakuratan data, mencegah pengajuan yang tidak valid, serta menjaga kendali administratif. ",
          },

          pkbm: {
            title: "Buku Induk Siswa Sekolah Bintang",
            shortDesc: "Sistem pengelolaan data induk siswa.",
            description:
              "Proyek ini merupakan sistem informasi berbasis web yang dirancang untuk mengelola data induk siswa di PKBM Sekolah Bintang, sebuah institusi pendidikan non-formal. Aplikasi ini dikembangkan untuk menggantikan proses pencatatan manual. Sistem ini memungkinkan administrator dan staf untuk mengelola profil siswa serta data akademik.\n\n Sistem ini mendukung akses multi-peran (Super Admin, Admin, Staff). Fitur utama meliputi operasi CRUD data siswa, pengelolaan nilai akademik, penyaringan dan pencarian berdasarkan tahun ajaran serta paket, serta pembuatan raport siswa secara otomatis dalam format PDF dan Word. Dashboard juga menyediakan visualisasi statistik pertumbuhan siswa dari waktu ke waktu.",
          },
        },
        contact: {
          title: "Let's Connect",
          description:
            "Tertarik untuk bekerja sama atau memiliki pertanyaan tentang proyek saya? Silakan hubungi saya melalui form atau media sosial.",
          follow: "Ikuti Saya",

          form: {
            name: "Nama",
            email: "Email",
            message: "Pesan",
            sending: "Mengirim...",
            send: "Kirim Pesan",
            successTitle: "Pesan Terkirim 🎉",
            successDesc:
              "Terima kasih sudah menghubungi! Saya akan balas secepatnya.",
          },
        },
      },
    },
  },

  lng: "id",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
