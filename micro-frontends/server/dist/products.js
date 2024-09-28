"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        id: 1,
        name: 'Klasik Beyaz Tişört',
        price: 49.99,
        description: 'Günlük kullanıma uygun, sade ve şık beyaz tişört.',
        image: 'http://localhost:8080/tshirt-white.jpg',
        longDescription: 'Klasik beyaz tişört, her dolapta bulunması gereken zamansız bir parça. Yumuşak pamuklu kumaşıyla rahatlık sunar, nefes alabilir ve tüm gün boyunca konfor sağlar. İster günlük stilinizde, ister spor yaparken tercih edebilirsiniz. Modern kesimi ve dayanıklı dikişleriyle uzun süre kullanıma uygundur.',
    },
    {
        id: 2,
        name: 'Kot Pantolon',
        price: 89.99,
        description: 'Mavi renkte klasik kot pantolon.',
        image: 'http://localhost:8080/jeans.jpg',
        longDescription: 'Kot pantolon, rahatlığı ve dayanıklılığı ile bilinir. Yüksek kaliteli denim kumaştan üretilen bu pantolon, hem günlük giyim için hem de şık kombinler için idealdir. Esnek yapısı sayesinde rahatça hareket etmenizi sağlar. Slim fit kesimi ile modern bir görünüm sunar.',
    },
    {
        id: 3,
        name: 'Siyah Blazer Ceket',
        price: 199.99,
        description: 'Şık ve resmi görünümler için ideal siyah blazer ceket.',
        image: 'http://localhost:8080/blazer.jpg',
        longDescription: 'Siyah blazer ceket, iş ve resmi davetler için mükemmel bir tercihtir. Slim fit kesimi ve hafif yapısıyla hem şık hem de rahat bir giyim deneyimi sunar. Özel günlerinizde veya iş yerinde stil sahibi görünmek isteyenler için tasarlanmıştır. Yüksek kaliteli kumaşı sayesinde uzun ömürlüdür.',
    },
    {
        id: 4,
        name: 'Kapüşonlu Sweatshirt',
        price: 79.99,
        description: 'Soğuk havalar için ideal, yumuşak kapüşonlu sweatshirt.',
        image: 'http://localhost:8080/hoodie.jpg',
        longDescription: 'Kapüşonlu sweatshirt, günlük rahat giyimin vazgeçilmez parçalarından biridir. Yumuşak iç astarı ve sıcak tutan kapüşonu sayesinde soğuk havalarda konfor sağlar. Geniş kesimi ve şık tasarımıyla hem spor yaparken hem de günlük kombinlerde rahatlıkla kullanabilirsiniz.',
    },
    {
        id: 5,
        name: 'Deri Ceket',
        price: 249.99,
        description: 'Klasik deri ceket, her tarza uyum sağlayan zamansız bir parça.',
        image: 'http://localhost:8080/leather-jacket.jpg',
        longDescription: 'Deri ceket, tarzınıza asi ve şık bir dokunuş katar. Kaliteli deri malzemesiyle uzun yıllar dayanır ve zamanla daha iyi bir görünüme sahip olur. Rahat kesimi sayesinde her mevsim tercih edilebilir ve hem günlük hem de gece şıklığında rahatlıkla kullanılabilir.',
    },
    {
        id: 6,
        name: 'Klasik Gömlek',
        price: 99.99,
        description: 'Ofis veya resmi davetlerde kullanılabilecek şık klasik gömlek.',
        image: 'http://localhost:8080/shirt.jpg',
        longDescription: 'Klasik gömlek, özellikle iş hayatında ve resmi ortamlarda tercih edilen bir parçadır. Slim fit kesimiyle modern bir görünüm sunar ve kaliteli pamuk kumaşıyla rahat bir giyim sağlar. Kolay ütülenebilir yapısı ve şık düğmeleriyle profesyonel bir duruş sergiler.',
    },
    {
        id: 7,
        name: 'Spor Eşofman Takımı',
        price: 129.99,
        description: 'Günlük antrenmanlar için ideal spor eşofman takımı.',
        image: 'http://localhost:8080/tracksuit.jpg',
        longDescription: 'Spor eşofman takımı, spor yaparken veya rahat bir gün geçirirken giyebileceğiniz bir tercihtir. Esnek ve hafif kumaşı sayesinde özgürce hareket etmenizi sağlar. Nefes alabilir yapısıyla terlemeyi önler ve antrenmanlarınızı daha rahat hale getirir. Şık ve modern tasarımıyla günlük giyimde de tercih edebilirsiniz.',
    },
    {
        id: 8,
        name: 'Kargo Pantolon',
        price: 79.99,
        description: 'Cep detaylı, rahat kesimli kargo pantolon.',
        image: 'http://localhost:8080/cargo-pants.jpg',
        longDescription: 'Kargo pantolon, rahatlığı ve işlevselliğiyle ön plana çıkar. Geniş cepleri ve dayanıklı kumaşı ile hem günlük giyimde hem de açık hava etkinliklerinde kullanılabilir. Rahat kesimi ve esnek yapısıyla özgürce hareket etmenize olanak tanır. Tarzınıza sportif bir dokunuş katar.',
    },
    {
        id: 9,
        name: 'Trençkot',
        price: 149.99,
        description: 'Mevsim geçişlerinde tercih edebileceğiniz klasik trençkot.',
        image: 'http://localhost:8080/trenchcoat.jpg',
        longDescription: 'Trençkot, klasik tarzın vazgeçilmez parçalarından biridir. Suya dayanıklı yapısı sayesinde yağmurlu havalarda rahatlıkla kullanılabilir. Hafif ve şık tasarımı ile her türlü kombinle uyum sağlar. Hem gündelik hayatınızda hem de iş hayatında stilinizi tamamlar.',
    },
    {
        id: 10,
        name: 'Kadife Pantolon',
        price: 89.99,
        description: 'Şık ve rahat kadife pantolon.',
        image: 'http://localhost:8080/corduroy-pants.jpg',
        longDescription: 'Kadife pantolon, yumuşak dokusu ve şık görünümüyle hem rahatlık hem de stil sunar. Kaliteli kadife kumaşı, soğuk havalarda sıcak tutar ve günlük kombinlerinizde fark yaratır. Rahat kesimi sayesinde hem işte hem de gündelik yaşamda tercih edilebilir.',
    },
    {
        id: 11,
        name: 'Rahat Yazlık Elbise',
        price: 129.99,
        description: 'Yaz aylarında giyebileceğiniz hafif ve rahat elbise.',
        image: 'http://localhost:8080/summer-dress.jpg',
        longDescription: 'Rahat yazlık elbise, sıcak havalarda ferah bir seçenek sunar. Nefes alabilir hafif kumaşı ve rahat kesimi sayesinde tüm gün boyunca konfor sağlar. Şık desenleri ve canlı renkleri ile yaz aylarının favori parçası olacak. Hem günlük kullanım hem de plaj gezileri için idealdir.',
    }
];
exports.default = products;
//# sourceMappingURL=products.js.map