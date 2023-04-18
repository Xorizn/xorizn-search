//server
__path = process.cwd()
var express = require('express');
var router = express.Router();

//module
const axios = require('axios'),
  util = require('util'),
  wiki = require('wikipedia'),
  develop = '@xorizn';
//Func is URL
const isUrl = (url) => {
  try {
    if (typeof url !== 'string') throw new Error('url is a string!');
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
  } catch (err) {
    console.log(util.format(err))
  };
};
const PromiseRes = (hasil) => {
  return { developer: develop, status: 200, result: hasil }
}

//Module downloads
const { Yt_Search, XPanas, WikiMedia, SoundCloudeS, RingTone, PlayStore, Lirik, GoogleS, GoogleImages, BukaLapak, AcaraNow, Jadwal_Sepakbola, JadwalTV, Steam, Steam_Detail, WattPad, LinkWa, Lirik2, KBBI, Nomina, KodePos } = require('../lib/search')

//function
const mess = {
  null_url: {
    developer: develop,
    mess: "Input parameter 'url'"
  },
  null_search: {
    developer: develop,
    mess: "Input parameter 'search'"
  },
}

//===============SEARCH=================================\\
router.get('/search/youtube', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await Yt_Search(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/wikimedia', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await WikiMedia(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/wikipedia', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    const searchWi = await wiki.search('sulahan');
    const page = await wiki.page(searchWi.results[0].pageid);
    const summary = await page.summary();
    const hasil = {
      page: page,
      summary: summary,
    }
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/soundcloud', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await SoundCloudeS(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/ringtone', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await RingTone(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/playstore', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await PlayStore(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/lirik', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await Lirik(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
//NEW
router.get('/search/lirik/v2', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await Lirik2(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/wattpad', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await WattPad(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/link-grup-wa', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await LinkWa(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/kbbi', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await KBBI(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/nomina', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await Nomina(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/kodepos', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await KodePos(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
///end
router.get('/search/steam', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await Steam(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/bukalapak', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await BukaLapak(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/xpanas', async (req, res, next) => {
  try {
    const search = req.query.search;
    if (!search) return res.json(mess.null_search)
    let hasil = await XPanas(search)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/nhentai', async (req, res, next) => {
  try {
    const g = req.query.g;
    if (!g) return res.json({ developer: develop, mess: "Input parameter 'g'" })
    const { data } = await axios.get(__dirNumber + book + g)
    res.json(PromiseRes(data.data)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/steam-detail', async (req, res, next) => {
  try {
    const url = req.query.url;
    if (!url) return res.json(mess.null_url)
    if (!isUrl(url)) return res.json(mess.is_url);
    if (!url.includes('steam')) return res.json({ developer: develop, mess: `${url} is not steam url` });
    let hasil = await Steam_Detail(url)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/search/google/:type', async (req, res, next) => {
  try {
    const search = req.query.search,
      type = req.params.type;

    if (type === 'search') {
      if (!search) return res.json(mess.null_search)
      var hasil = await GoogleS(search)
    } else if (type === 'image') {
      if (!search) return res.json(mess.null_search)
      var hasil = await GoogleImages(search)
    } else {
      return res.redirect('/')
    }
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
//==============TV===============\\
router.get('/tv/acaranow', async (req, res, next) => {
  try {
    let hasil = await AcaraNow()
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/tv/sepakbola', async (req, res, next) => {
  try {
    let hasil = await Jadwal_Sepakbola()
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})
router.get('/tv/jadwal', async (req, res, next) => {
  try {
    const search = req.query.search,
      ttv = ['gtv', 'antv', 'indosiar', 'inewstv', 'kompastv', 'metrotv', 'mnctv', 'moji', 'nettv', 'rcti', 'rtv', 'sctv', 'trans7', 'transtv', 'tvone', 'tvri'];
    if (!search) return res.json(mess.null_search)
    let xor = search.toLowerCase();
    if (!ttv.includes(xor)) return res.json({ developer: develop, mess: `select tv channel: ${ttv.join(', ')}` });
    let hasil = await JadwalTV(xor)
    res.json(PromiseRes(hasil)).status(200)
  } catch (err) {
    res.status(500).json({ developer: develop, mess: `${err.toString()}. Report this error to Developer(Xorizn)` })
  }
})

module.exports = router