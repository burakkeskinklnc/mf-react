
<img src="https://github.com/user-attachments/assets/7228b191-b7f0-47c4-b431-6f558089cdc7" alt="odeal-tech" width="1500" height="400">



#  Micro Frontend & React

Bu proje, **micro frontend** mimarisine dayalı bir uygulama örneğidir. Proje, üç ana parçaya ayrılmıştır:

1. **Home**: Ana sayfa bileşenlerini içeren micro frontend.
2. **PDP (Product Detail Page)**: Ürün detaylarını görüntüleyen sayfa bileşenlerini içeren micro frontend.
3. **Server**: Home ve PDP uygulamaları için veri sağlayan bir backend sunucusu.

## Proje Yapısı

```bash
.
├── home/         # Home micro frontend uygulaması
├── pdp/          # PDP micro frontend uygulaması
├── server/       # Backend sunucusu

```
## Ekran Görüntüleri


![project](https://github.com/user-attachments/assets/308bfadf-e158-41c4-868d-810264491a40)




## Gereksinimler
Bu projeyi çalıştırmak için aşağıdaki yazılımların bilgisayarınızda kurulu olduğundan emin olun:

- [Node.js (LTS sürümü)](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)


## Her micro frontend ve backend için bağımlılıkları yükleyin ve çalıştırın:

## Home

```
cd home
yarn && yarn start
```

## PDP

```
cd ../pdp
yarn && yarn start
```

## Server

```
cd ../server
yarn && yarn start
```


## Tüm uygulamaları başlattıktan sonra tarayıcınızda şu URL'lere giderek uygulamaları test edebilirsiniz:

- Home: [http://localhost:3000](http://localhost:3000)
- PDP (Product Detail Page): [http://localhost:3001](http://localhost:3001)
- Server: [http://localhost:3002](http://localhost:3002)
