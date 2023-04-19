<div align="center">

<h1>Search Scraper</h1>

<p>An api to search all media</p>

![xorizn-search](https://socialify.git.ci/xorizn/xorizn-search/image?description=1&forks=1&issues=1&logo=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F26%2F91%2Ff2%2F2691f2fa1a0f078f5f274edf7fea6763.png&owner=1&pulls=1&stargazers=1&theme=Light)

</div>

## Other Scraper

- [DOWNLOADS-API](https://github.com/Xorizn/xorizn-downloads)
- [ALL-API](https://github.com/Xorizn/xorizn-apis)

## List Routes SEARCH API
- `/` : Nothing
- `api/search/youtube`
- `api/search/wikimedia`
- `api/search/wikipedia`
- `api/search/soundcloud`
- `api/search/ringtone`
- `api/search/playstore`
- `api/search/lirik`
- `api/search/lirik/v2`
- `api/search/wattpad`
- `api/search/link-grup-wa`
- `api/search/kbbi`
- `api/search/nomina`
- ~~`api/search/kodepos`~~
- `api/search/steam`
- `api/search/bukalapak`
- `api/search/xpanas`
- `api/search/nhentai`
- `api/search/steam-detail`
- `api/search/google/search`
- `api/search/google/image`

### TV SEARCH
- `api/tv/acaranow`
- `api/tv/sepakbola`
- `api/tv/jadwal`


## Example and params
```
  GET api/search/:param
```
### API SEARCH

| Param          | query     | Method | Example  |
| :----------    | :-------  | :--    | :--      |
| `/youtube`   | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/youtube?search=zee) |
| `/wikimedia`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/wikimedia?search=jokowi) |
| `/wikipedia`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/wikipedia?search=jokowi) |
| `/soundcloud`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/soundcloud?search=bertaut) |
| `/ringtone`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/ringtone?search=naruto) |
| `/playstore`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/playstore?search=ff) |
| `/lirik`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/lirik?search=bertaut) |
| `/lirik/v2`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/lirik/v2?search=bertaut) |
| `/wattpad`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/wattpad?search=anime) |
| `/link-grup-wa`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/link-grup-wa?search=anime) |
| `/kbbi`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/kbbi?search=aku) |
| `/nomina`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/nomina?search=aku) |
| ~~`/kodepos`~~    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/kodepos?search=jakarta) |
| `/steam`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/steam?search=dota2) |
| `/bukalapak`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/bukalapak?search=baju) |
| `/xpanas`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/xpanas?search=china) |
| `/nhentai`    | `g`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/nhentai?g=310502) |
| `/steam-detail`    | `url`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/steam-detail?url=https://store.steampowered.com/app/570/Dota_2/) |
| `/google/search`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/google/search?search=naruto) |
| `/google/image`    | `search`     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/search/google/image?search=naruto) |

## API TV
```
  GET api/tv/:param
```
| Param          | query     | Method | Example  |
| :----------    | :-------  | :--    | :--      |
| `/acaranow`    |      | GET    | [EXAMPLE]() |
| `/sepakbola`   |      | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/tv/acaranow) |
| `/jadwal`    | `search`: *gtv*, *antv*, *indosiar*, *inewstv*, *kompastv*, *metrotv*, *mnctv*, *moji*, *nettv*, *rcti*, *rtv*, *sctv*, *trans7*, *transtv*, *tvone*, *tvri*     | GET    | [EXAMPLE](https://xorizn-search.vercel.app/api/tv/jadwal?search=antv) |

## Installation

If you want to add this project in your own machine, you can install this project by following the step below

1. Clone this repository

```
git clone https://github.com/Xorizn/xorizn-downloads.git
```

2. Install dependencies

In my case, i'm using pnpm for package manager, you can adjust with your favorite package manager

```
npm install
```

# MAKASIH LORT
* [`Satya Wikananda`](https://github.com/satyawikananda)

ed by Express and vercel. Code licensed under [MIT License](https://raw.githubusercontent.com/Xorizn/xorizn-downloads/master/LICENSE)
