interface Utilisateur{
    id: number;
    nomComplet: string;
    email: string;
    motDePasse: string;
    textePoste: string;
    photoProfil: string;
    videoPoste?: string;
    imagesPoste?: string;
    commentaires?: string;
    likes?: number;
    partages?: number;
    nombreCommentaire?:number;
}


const utilisateurs: Utilisateur[] = [
    {id:1, nomComplet:"Ryomen Sukuna",
        email:"sukuna@gmail.com",
        motDePasse:"123456",
        textePoste:"passez un agrable journee a bassam",
        photoProfil: "https://i.pinimg.com/736x/30/b9/67/30b967b7f06d4757516f7df3e521450f.jpg",
        imagesPoste:"https://i.pinimg.com/736x/1b/88/a0/1b88a0e79d12dc87bdfcfab2ddc9b353.jpg",
        commentaires:"merci a tous",
        videoPoste: require('../assets/videos/VideoUn.mp4'),
        likes:459,
        partages:12,
        nombreCommentaire:19
    },

    {
        id: 2,
        nomComplet: "Gojo Satoru",
        email: "gojo@gmail.com",
        motDePasse: "7891011",
        textePoste: "Les petites victoires comptent aussi.",
        photoProfil: "https://i.pinimg.com/736x/0a/bd/e4/0abde41b98fa8a164eaa9d07d6cb11d5.jpg",
        imagesPoste: "https://i.pinimg.com/736x/85/aa/cb/85aacb527caf583d3ced95063ba44062.jpg",
        commentaires: "Inspirant!",
        videoPoste: require('../assets/videos/Video2.mp4'),
        likes: 765,
        partages: 34,
        nombreCommentaire:1
      },
      {
        id: 3,
        nomComplet: "Megumi Fushiguro",
        email: "megumi@gmail.com",
        motDePasse: "112233",
        textePoste: "L'art de l'équilibre.",
        photoProfil: "https://i.pinimg.com/474x/88/d7/05/88d705ca501258ecd40b396891e653bc.jpg",
        imagesPoste: "https://i.pinimg.com/474x/5b/57/db/5b57db1601865d751ada6b3e09eeb0cb.jpg",
        videoPoste:require('../assets/videos/Video3.mp4'),
        commentaires: "Bravo!",
        likes: 234,
        partages: 18,
        nombreCommentaire:3
      },
      {
        id: 4,
        nomComplet: "Itadori Yuuji",
        email: "itadori@gmail.com",
        motDePasse: "654321",
        textePoste: "Un bon repas et des amis, c'est la vie!",
        photoProfil: "https://i.pinimg.com/474x/21/c1/c5/21c1c5de672ded930814238fa60f2069.jpg",
        imagesPoste: "https://i.pinimg.com/474x/e8/ff/a3/e8ffa301dc6b5edc880b4ad3a345e835.jpg",
        videoPoste:require('../assets/videos/Video4.mp4'),
        commentaires: "Appétissant!",
        likes: 128,
        partages: 4,
        nombreCommentaire:14
      },
      {
        id: 5,
        nomComplet: "Nobara Kugisaki",
        email: "nobara@gmail.com",
        motDePasse: "987654",
        textePoste: "L'élégance, c'est tout.",
        photoProfil: "https://i.pinimg.com/474x/41/48/c7/4148c7e83d1a2c130f67d6c18dda8ba0.jpg",
        imagesPoste: "https://i.pinimg.com/736x/a4/48/30/a44830bcc482bbc9b19353b2c59f046f.jpg",
        videoPoste:require('../assets/videos/Video12.mp4'),
        commentaires: "Magnifique!",
        likes: 412,
        partages: 27,
      },
      {
        id: 6,
        nomComplet: "Maki Zenin",
        email: "maki@gmail.com",
        motDePasse: "121212",
        textePoste: "Force et détermination.",
        photoProfil: "https://i.pinimg.com/474x/a7/2a/a8/a72aa88120d42a3b9090091737914650.jpg",
        imagesPoste: "https://i.pinimg.com/474x/39/2a/63/392a63b7947d0b2111c5c6a31d50a3a7.jpg",
        videoPoste:require('../assets/videos/Video5.mp4'),
        commentaires: "Inspirant!",
        likes: 586,
        partages: 39,
      },
      {
        id: 7,
        nomComplet: "Nanami Kento",
        email: "nanami@gmail.com",
        motDePasse: "123123",
        textePoste: "Chaque jour est une opportunité.",
        photoProfil: "https://i.pinimg.com/474x/a7/2a/a8/a72aa88120d42a3b9090091737914650.jpg",
        imagesPoste:"https://i.pinimg.com/736x/9c/3f/f8/9c3ff80de68d804ab50f939d3d82723d.jpg",
        videoPoste:require('../assets/videos/Video6.mp4'),
        commentaires: "Motivant!",
        likes: 901,
        partages: 50,
      },
      {
        id: 8,
        nomComplet: "Shoko Ieiri",
        email: "shoko@gmail.com",
        motDePasse: "454545",
        textePoste: "La santé est la clé du bonheur.",
        photoProfil: "https://i.pinimg.com/474x/7f/78/9b/7f789b348ac963a19c6d80f8d6be0cea.jpg",
        imagesPoste: "https://i.pinimg.com/736x/d4/14/1a/d4141aa4c4714c0d07a80644dae57753.jpg",
        videoPoste:require('../assets/videos/Video7.mp4'),
        commentaires: "C'est vrai!",
        likes: 402,
        partages: 15,
      },
      {
        id: 9,
        nomComplet: "Toji Fushiguro",
        email: "toji@gmail.com",
        motDePasse: "333222",
        textePoste: "Le pouvoir sans contrôle n'est rien.",
        photoProfil: "https://i.pinimg.com/474x/af/ab/35/afab350d3d598565b08a0d1320367515.jpg",
        imagesPoste: "https://i.pinimg.com/736x/4a/a9/5d/4aa95d21bc314a3eb2be858453235975.jpg",
        videoPoste:require('../assets/videos/Video8.mp4'),
        commentaires: "Exactement!",
        likes: 803,
        partages: 47,
        nombreCommentaire:20
      },
      {
        id: 10,
        nomComplet: "Mai Zenin",
        email: "mai@gmail.com",
        motDePasse: "666777",
        textePoste: "Chaque défi est une nouvelle chance.",
        photoProfil: "https://i.pinimg.com/474x/cb/75/41/cb7541962502380c82188d73858e65b4.jpg",
        imagesPoste: "https://i.pinimg.com/474x/d0/51/ba/d051ba3e58ad7a5f0712316976b9474b.jpg",
        videoPoste:require('../assets/videos/Video9.mp4'),
        commentaires: "Motivant!",
        likes: 619,
        partages: 22,
      },
      {
        id: 11,
        nomComplet: "Yuta Okkotsu",
        email: "yuta@gmail.com",
        motDePasse: "444333",
        textePoste: "La persévérance surpasse le talent.",
        photoProfil: "https://i.pinimg.com/736x/4e/a6/77/4ea677437e7878c44daaa43498f3e7b5.jpg",
        imagesPoste: "https://i.pinimg.com/474x/47/93/34/479334c8dac160e592461ee22cb645e4.jpg",
        videoPoste:require('../assets/videos/Video10.mp4'),
        commentaires: "Merci pour ce rappel.",
        likes: 548,
        partages: 30,
        nombreCommentaire:198
      },
      {
        id: 12,
        nomComplet: "Noritoshi Kamo",
        email: "kamo@gmail.com",
        motDePasse: "999888",
        textePoste: "La tradition, c'est la force.",
        photoProfil: "https://i.pinimg.com/474x/35/a0/c8/35a0c86ea72ab3bcf7ed08685e31f487.jpg",
        imagesPoste:"https://i.pinimg.com/736x/95/91/04/9591046022c41f644c84940944bcc793.jpg",
        videoPoste:require('../assets/videos/Video11.mp4'),
        commentaires: "Belle réflexion.",
        likes: 701,
        partages: 40,
      },
      {
        id: 13,
        nomComplet: "Panda",
        email: "panda@gmail.com",
        motDePasse: "555666",
        textePoste: "Toujours doux mais puissant.",
        photoProfil: "https://i.pinimg.com/736x/fc/6d/23/fc6d23f0c26e68f40aee5bb6e9edf83d.jpg",
        imagesPoste: "https://i.pinimg.com/474x/e6/54/6f/e6546fe32529445e0aafa40976e37eb2.jpg",
        videoPoste:require('../assets/videos/Video13.mp4'),
        commentaires: "Trop mignon!",
        likes: 932,
        partages: 60,
      },
      {
        id: 14,
        nomComplet: "Toge Inumaki",
        email: "toge@gmail.com",
        motDePasse: "888999",
        textePoste: "La discipline est la clé.",
        photoProfil: "https://i.pinimg.com/474x/b7/ba/19/b7ba1968ac18da1d59330f14590d87c0.jpg",
        imagesPoste: "https://i.pinimg.com/474x/ef/4b/eb/ef4bebf89c85dadfeffad3b3ef8994f8.jpg",
        videoPoste:require('../assets/videos/Video14.mp4'),
        commentaires: "Belle discipline!",
        likes: 401,
        partages: 19,
      },
      {
        id: 15,
        nomComplet: "Rika Orimoto",
        email: "rika@gmail.com",
        motDePasse: "444555",
        textePoste: "L'amour transcende tout.",
        photoProfil: "https://i.pinimg.com/474x/9f/d1/bf/9fd1bff3e63254708a89e8a71eed3165.jpg",
        imagesPoste: "https://i.pinimg.com/736x/0c/a3/4c/0ca34c19593cc061b7263ac3221d35c1.jpg",
        videoPoste:require('../assets/videos/Video15.mp4'),
        commentaires: "Touchant!",
        likes: 810,
        partages: 45,
      },
]

export default utilisateurs