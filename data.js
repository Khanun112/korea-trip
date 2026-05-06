// ============================================================
// data.js — ข้อมูลทริป "ก้าวก่อนเปลี่ยน" 11-25 พ.ค. 2569
// แก้ไขข้อมูลในไฟล์นี้เพื่ออัพเดตตาราง
// ============================================================

// พิกัด Google Maps จาก My Map (Seoul Political History Trip)
const MAP_PINS = {
  "พิพิธภัณฑ์เรือนจำซอแดมุน":              [37.574271,  126.956071],
  "The Korean National Police Museum":        [37.572088,  126.962124],
  "Seoul Museum of History":                  [37.570462,  126.970513],
  "Gyeonggyojang-gil":                        [37.567809,  126.966015],
  "พระราชวังเคียงบกกุง":                     [37.579617,  126.977041],
  "Cheong Wa Dae (บ้านบลูเฮาส์)":           [37.586673,  126.976268],
  "Gwanghwamun Square":                       [37.572389,  126.976912],
  "พิพิธภัณฑ์ประวัติศาสตร์ร่วมสมัยแห่งชาติเกาหลี": [37.573943, 126.977930],
  "An Jung-geun Memorial Museum":             [37.553356,  126.980507],
  "Tapgol Park":                              [37.571146,  126.988330],
  "Jeon Tae-il Memorial Hall":               [37.568437,  126.989308],
  "Pyounghwa Market":                         [37.569465,  127.008085],
  "อนุสรณ์สถานแห่งสงครามเกาหลี":           [37.536987,  126.977102],
  "Democracy and Human Rights Memorial Hall": [37.541058,  126.971694],
  "Kim Koo Museum & Library":                 [37.544554,  126.959482],
  "War & Women's Human Rights Museum":        [37.560057,  126.914899],
  "Lee Han-yeol Memorial Museum":             [37.555008,  126.933863],
  "Kim Dae-jung Library":                     [37.556946,  126.929566],
  "Seoul Battleship Park":                    [37.553564,  126.897432],
  "National Assembly Building":               [37.531805,  126.914155],
  "National Assembly Constitution Memorial Hall": [37.531865, 126.919065],
  "Park Chung-hee Presidential Library":      [37.575158,  126.886213],
};

function mapsUrl(name, fallbackQuery) {
  const c = MAP_PINS[name];
  if (c) return `https://www.google.com/maps/search/?api=1&query=${c[0]},${c[1]}`;
  const q = fallbackQuery || name + ' Seoul Korea';
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

// ============================================================
// โครงสร้าง day: { id, label, gwangju, date, title, sections }
// section: { label (optional), hotel (optional), rows[] }
// row: { time, tclass, name, note, tags[], mapKey }
//   tclass: morning | afternoon | evening | night | transit | conf | keynote
//   tags: array of "history|protest|culture|transit|food|nk|conf|speaker"
//   mapKey: ชื่อ key ใน MAP_PINS (หรือ null ถ้าไม่มี)
// ============================================================

window.DAYS = [

// ── 11 พ.ค. ──────────────────────────────────────────────────
{
  id:"d11", label:"11 พ.ค.", gwangju:false,
  date:"วันที่ 11 พ.ค. (จันทร์)", title:"BKK → ICN · เช็คอิน Hongdae",
  sections:[{
    hotel:{ title:"✈️ KE 660 · Bangkok (BKK) 09:50 → Incheon (ICN) 17:20", body:"ออกจากบ้านไปสนามบินสุวรรณภูมิก่อน 07:00 · เช็คอินสายการบิน 2.5-3 ชม.ก่อนเที่ยวบิน" },
    rows:[
      { time:"07:00",    tc:"transit",   name:"สนามบินสุวรรณภูมิ (BKK)",              note:"เช็คอิน KE660 · ผ่านตรวจ · รอขึ้นเครื่อง",                               tags:["transit"],               mapKey:null },
      { time:"09:50",    tc:"transit",   name:"เครื่องขึ้น KE 660",                    note:"Korean Air · ~5:30 ชม. · ถึง ICN 17:20",                                  tags:["transit"],               mapKey:null },
      { time:"17:20",    tc:"transit",   name:"Incheon Airport (ICN)",                 note:"ผ่านตรวจคนเข้าเมือง · ซื้อ T-money card ที่ 7-Eleven · ต่อ AREX",        tags:["transit"],               mapKey:null },
      { time:"18:10",    tc:"transit",   name:"AREX Express → Hongik Univ. Station",   note:"Express 43 นาที · ₩9,500 · ลงที่ Hongik University แล้วเดินไปโรงแรม",   tags:["transit"],               mapKey:null },
      { time:"19:00",    tc:"evening",   name:"เช็คอินโรงแรม — ย่านฮงแด",             note:"พักผ่อน · ทำความรู้จักย่าน Hongdae",                                       tags:["culture"],               mapKey:null },
      { time:"20:00",    tc:"evening",   name:"🌶️ ต๊อกบ๊อกกี #1 — ย่านฮงแด",          note:"ร้านแรกของซีรี่ย์ · หาร้าน queue ยาวในย่าน Hongdae",                      tags:["food"],                  mapKey:null },
    ]
  }]
},

// ── 12 พ.ค. ──────────────────────────────────────────────────
{
  id:"d12", label:"12 พ.ค.", gwangju:false,
  date:"วันที่ 12 พ.ค. (อังคาร)", title:"โซล · โซนซอแดมุน — อาณานิคมญี่ปุ่น",
  sections:[{ rows:[
    { time:"09:00", tc:"morning",   name:"พิพิธภัณฑ์เรือนจำซอแดมุน",          note:"เรือนจำที่ญี่ปุ่นคุมขังนักต่อสู้อิสรภาพเกาหลี · เปิด 09:30 · #บาดแผลหลัก",   tags:["history","protest"],  mapKey:"พิพิธภัณฑ์เรือนจำซอแดมุน" },
    { time:"11:00", tc:"morning",   name:"The Korean National Police Museum",   note:"พิพิธภัณฑ์ตำรวจ · เข้าใจระบบยุคเผด็จการ · ฟรี",                                tags:["history"],             mapKey:"The Korean National Police Museum" },
    { time:"12:30", tc:"afternoon", name:"🌶️ ต๊อกบ๊อกกี #2 — Sindang-dong",    note:"ย่านต๊อกบ๊อกกีเก่าแก่ที่สุดในโซล · ลองเจ้าดั้งเดิม",                          tags:["food"],                mapKey:null },
    { time:"14:00", tc:"afternoon", name:"Seoul Museum of History",             note:"ประวัติศาสตร์เมืองโซล ยุคโชซอน → สมัยใหม่",                                    tags:["history"],             mapKey:"Seoul Museum of History" },
    { time:"15:30", tc:"afternoon", name:"Gyeonggyojang-gil",                   note:"บ้านพักของ Kim Gu นักต่อสู้อิสรภาพที่ถูกลอบสังหาร · ใกล้ Seodaemun",           tags:["history","protest"],  mapKey:"Gyeonggyojang-gil" },
    { time:"17:00", tc:"evening",   name:"พักผ่อน / เดินย่าน Hongdae",          note:"เตรียมตัวเดินทางพรุ่งนี้",                                                       tags:["culture"],             mapKey:null },
  ]}]
},

// ── 13 พ.ค. ──────────────────────────────────────────────────
{
  id:"d13", label:"13 พ.ค.", gwangju:true,
  date:"วันที่ 13 พ.ค. (พุธ)", title:"โซล → กวางจู · เช็คอิน UTOP Boutique",
  sections:[{
    hotel:{ title:"🏨 UTOP BOUTIQUE HOTEL & RESIDENCE", body:"53 Sichung-ro, Seo-gu, Gwangju-si, Korea 61949 · จองตั๋ว KTX ล่วงหน้า letskorail.com" },
    rows:[
      { time:"07:00", tc:"morning",   name:"เช็คเอาท์โรงแรม Hongdae",                   note:"เก็บกระเป๋า · ออกแต่เช้า",                                                tags:["transit"],               mapKey:null },
      { time:"08:30", tc:"transit",   name:"KTX: Yongsan → Gwangju Songjeong",           note:"~1:40 ชม. · ₩27,000–35,000 · จองล่วงหน้า",                               tags:["transit"],               mapKey:null },
      { time:"10:30", tc:"morning",   name:"ถึงกวางจู · เช็คอิน UTOP Boutique",          note:"วางกระเป๋า · พักผ่อนสั้น",                                                tags:[],                        mapKey:null },
      { time:"13:00", tc:"afternoon", name:"May 18th National Cemetery (5·18 묘지)",     note:"สุสานวีรชน 18 พ.ค. 1980 · Gwangju Uprising · #บาดแผลสำคัญที่สุด",         tags:["history","protest"],     mapKey:null },
      { time:"15:30", tc:"afternoon", name:"518 Memorial Foundation + Democracy Square", note:"จัตุรัสประชาธิปไตย ศูนย์กลางการลุกฮือ 1980",                              tags:["history","protest"],     mapKey:null },
      { time:"18:00", tc:"evening",   name:"🌶️ ต๊อกบ๊อกกี #3 — Gwangju Style",           note:"สไตล์กวางจู · ตลาด Yangdong · ต่างจากโซล",                               tags:["food"],                  mapKey:null },
    ]
  }]
},

// ── 14 พ.ค. ──────────────────────────────────────────────────
{
  id:"d14", label:"14 พ.ค.", gwangju:true,
  date:"วันที่ 14 พ.ค. (พฤหัส)", title:"GPHR Conference · Day 1 — Opening",
  sections:[{
    hotel:{ title:"🎙️ 2026 GPHR Conference · กวางจู · Day 1", body:"UTOP Boutique Hotel & Residence", highlight:true },
    rows:[
      { time:"09:30–10:00",  tc:"conf",    name:"Registration",                    note:"ลงทะเบียน",                                                                   tags:["conf"],          mapKey:null },
      { time:"10:00–12:00",  tc:"keynote", name:"Opening Ceremony & Keynote",      note:"พิธีเปิดและปาฐกถาหลัก",                                                       tags:["conf"],          mapKey:null },
      { time:"12:00–13:00",  tc:"transit", name:"Lunch",                           note:"",                                                                             tags:["food"],          mapKey:null },
      { time:"13:00–15:30",  tc:"conf",    name:"Thematic Session",                note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"15:30–16:00",  tc:"conf",    name:"Focus Session 1",                 note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"16:00–18:00",  tc:"conf",    name:"Asia Democracy Session",          note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"18:00–19:00",  tc:"evening", name:"Network Party",                   note:"",                                                                             tags:["conf"],          mapKey:null },
    ]
  }]
},

// ── 15 พ.ค. ──────────────────────────────────────────────────
{
  id:"d15", label:"15 พ.ค. ⭐", gwangju:true,
  date:"วันที่ 15 พ.ค. (ศุกร์)", title:"GPHR Conference · Day 2 — 🎙️ Speaker Day",
  sections:[{
    hotel:{ title:"⭐ SPEAKER DAY — Focus Session 2, Thailand", body:"Sirapop Phumphungphut · Presentation 6 · 13:30–15:00", highlight:true },
    rows:[
      { time:"09:00–10:00",  tc:"conf",    name:"Film Screening",                  note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"10:00–12:00",  tc:"keynote", name:"Special Session",                 note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"12:00–13:00",  tc:"transit", name:"Lunch",                           note:"",                                                                             tags:["food"],          mapKey:null },
      { time:"13:00–13:30",  tc:"conf",    name:"Special Session",                 note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"13:30–15:00",  tc:"keynote", name:"⭐ Focus Session 2 — Sirapop Phumphungphut", note:"Presentation 6 · Thailand · SPEAKER",                             tags:["speaker","conf"], mapKey:null },
      { time:"15:00–17:00",  tc:"conf",    name:"Transitional Justice Session",    note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"17:00–18:00",  tc:"evening", name:"Dinner",                          note:"",                                                                             tags:["food"],          mapKey:null },
      { time:"18:00–19:00",  tc:"transit", name:"Move to Guemnam-ro",              note:"",                                                                             tags:["transit"],       mapKey:null },
      { time:"19:00+",       tc:"evening", name:"2026 GPHR Ceremony",              note:"Guemnam-ro",                                                                   tags:["conf"],          mapKey:null },
    ]
  }]
},

// ── 16 พ.ค. ──────────────────────────────────────────────────
{
  id:"d16", label:"16 พ.ค.", gwangju:true,
  date:"วันที่ 16 พ.ค. (เสาร์)", title:"GPHR Conference · Day 3 — Closing + 5·18 Festival",
  sections:[{
    hotel:{ title:"🎙️ 2026 GPHR Conference · Day 3 + พิธีรำลึก 5·18 ครั้งที่ 46", body:"UTOP Boutique Hotel & Residence", highlight:true },
    rows:[
      { time:"10:30–12:00",  tc:"conf",    name:"Journalist Session",              note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"12:00–13:00",  tc:"transit", name:"Lunch",                           note:"",                                                                             tags:["food"],          mapKey:null },
      { time:"13:00–15:00",  tc:"keynote", name:"Plenary Session",                 note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"15:00–15:30",  tc:"conf",    name:"Closing Ceremony",                note:"",                                                                             tags:["conf"],          mapKey:null },
      { time:"15:30–16:30",  tc:"transit", name:"Move to Guemnam-ro",              note:"",                                                                             tags:["transit"],       mapKey:null },
      { time:"16:30–18:00",  tc:"evening", name:"The 46th Anniversary May 18 Democratic Uprising Eve Festival", note:"Guemnam-ro · พิธีรำลึก 5·18 ปีที่ 46",        tags:["protest","history"], mapKey:null },
    ]
  }]
},

// ── 17 พ.ค. ──────────────────────────────────────────────────
{
  id:"d17", label:"17 พ.ค.", gwangju:true,
  date:"วันที่ 17 พ.ค. (อาทิตย์)", title:"กวางจู · 5·18 Anniversary → กลับโซล",
  sections:[{ rows:[
    { time:"เช้า",   tc:"morning",   name:"May 18th Democratic Uprising Anniversary", note:"วันครบรอบ · พิธีรำลึกหลัก · ออกดูบรรยากาศช่วงเช้า",                       tags:["protest","history"],   mapKey:null },
    { time:"12:00",  tc:"transit",   name:"KTX กวางจู → โซล",                        note:"กลับโซล ~1:40 ชม. · เช็คอินโรงแรมแถว Hongdae",                             tags:["transit"],             mapKey:null },
    { time:"บ่าย",   tc:"afternoon", name:"พักผ่อน ปรับตัว",                           note:"เตรียมร่างกายสำหรับสัปดาห์ต่อไป",                                           tags:[],                      mapKey:null },
    { time:"เย็น",   tc:"evening",   name:"🌶️ ต๊อกบ๊อกกี #4 — ฮงแด",                 note:"ตามอารมณ์",                                                                  tags:["food"],                mapKey:null },
  ]}]
},

// ── 18 พ.ค. ──────────────────────────────────────────────────
{
  id:"d18", label:"18 พ.ค.", gwangju:false,
  date:"วันที่ 18 พ.ค. (จันทร์)", title:"โซล · ยงซาน — สงครามเกาหลี + สิทธิมนุษยชน",
  sections:[{ rows:[
    { time:"09:30", tc:"morning",   name:"อนุสรณ์สถานแห่งสงครามเกาหลี",           note:"พิพิธภัณฑ์สงครามใหญ่ที่สุด · outdoor + indoor timeline 1950–53 · ฟรี",        tags:["history"],             mapKey:"อนุสรณ์สถานแห่งสงครามเกาหลี" },
    { time:"12:00", tc:"afternoon", name:"🌶️ ต๊อกบ๊อกกี #5 — Noryangjin Market",   note:"ตลาดปลา Noryangjin ใกล้ Yongsan · กินต๊อกบ๊อกกีระหว่างชมตลาด",              tags:["food"],                mapKey:null },
    { time:"13:30", tc:"afternoon", name:"Democracy and Human Rights Memorial Hall",note:"ย่าน Yongsan · เอกสารขบวนการประชาธิปไตย",                                    tags:["history","protest"],   mapKey:"Democracy and Human Rights Memorial Hall" },
    { time:"15:30", tc:"afternoon", name:"Kim Koo Museum & Library",               note:"Kim Ku นักต่อสู้เอกราชที่ถูกลอบสังหาร 1949",                                  tags:["history"],             mapKey:"Kim Koo Museum & Library" },
    { time:"17:30", tc:"evening",   name:"เว้นว่าง / The Hyundai Seoul",            note:"ห้าง The Hyundai Seoul ย่าน Yeouido · หรือเดินริม Han River",                  tags:["culture"],             mapKey:null },
  ]}]
},

// ── 19 พ.ค. ──────────────────────────────────────────────────
{
  id:"d19", label:"19 พ.ค.", gwangju:false,
  date:"วันที่ 19 พ.ค. (อังคาร)", title:"โซล · จงโน — ขบวนการ 1 มีนาคม + แรงงาน",
  sections:[{ rows:[
    { time:"09:00", tc:"morning",   name:"Tapgol Park",                             note:"จุดประกาศ March 1st Movement 1919 ต้านอาณานิคมญี่ปุ่น · #สถานที่จริง",     tags:["history","protest"],   mapKey:"Tapgol Park" },
    { time:"10:30", tc:"morning",   name:"Jeon Tae-il Memorial Hall + คลองช็องกเยช็อน", note:"อนุสาวรีย์ช่างเย็บผ้าเผาตัว 1970 · ย่านแรงงาน",                     tags:["history","protest"],   mapKey:"Jeon Tae-il Memorial Hall" },
    { time:"12:00", tc:"afternoon", name:"🌶️ ต๊อกบ๊อกกี #6 — Pyounghwa Market",    note:"ตลาดในย่าน Jongno · บรรยากาศตลาดเก่า",                                      tags:["food"],                mapKey:"Pyounghwa Market" },
    { time:"13:30", tc:"afternoon", name:"Gwanghwamun Square",                      note:"จัตุรัสหลักโซล · เส้นทางเดินขบวนทุกยุค",                                    tags:["protest","history"],   mapKey:"Gwanghwamun Square" },
    { time:"14:30", tc:"afternoon", name:"พิพิธภัณฑ์ประวัติศาสตร์ร่วมสมัยแห่งชาติเกาหลี", note:"ติด Gwanghwamun · timeline อาณานิคม→ปัจจุบัน · ฟรี",           tags:["history"],             mapKey:"พิพิธภัณฑ์ประวัติศาสตร์ร่วมสมัยแห่งชาติเกาหลี" },
    { time:"17:00", tc:"evening",   name:"เว้นว่าง",                                note:"—",                                                                           tags:[],                      mapKey:null },
  ]}]
},

// ── 20 พ.ค. ──────────────────────────────────────────────────
{
  id:"d20", label:"20 พ.ค.", gwangju:false,
  date:"วันที่ 20 พ.ค. (พุธ)", title:"โซล · รัฐสภา Yeouido + มาโป",
  sections:[{ rows:[
    { time:"09:00", tc:"morning",   name:"National Assembly Building (รัฐสภา)",    note:"จองล่วงหน้า na.go.kr · ทัวร์ฟรี ~2 ชม. · แต่งกายสุภาพ",                     tags:["history","protest"],   mapKey:"National Assembly Building" },
    { time:"10:30", tc:"morning",   name:"National Assembly Constitution Memorial Hall", note:"ติดกับรัฐสภา · ประวัติรัฐธรรมนูญเกาหลี",                              tags:["history"],             mapKey:"National Assembly Constitution Memorial Hall" },
    { time:"12:00", tc:"afternoon", name:"🌶️ ต๊อกบ๊อกกี #7 — Yeouido Pojangmacha", note:"แผงลอยริมแม่น้ำ Han · เย็นดี",                                               tags:["food"],                mapKey:null },
    { time:"13:30", tc:"afternoon", name:"War & Women's Human Rights Museum",      note:"Mapo · พิพิธภัณฑ์ 'comfort women' · สตรีในสงคราม",                            tags:["history","protest"],   mapKey:"War & Women's Human Rights Museum" },
    { time:"15:00", tc:"afternoon", name:"Lee Han-yeol Memorial Museum",           note:"นักศึกษาเสียชีวิตจากแก๊สน้ำตา 1987 · จุดเปลี่ยนสู่ประชาธิปไตย",             tags:["history","protest"],   mapKey:"Lee Han-yeol Memorial Museum" },
    { time:"16:30", tc:"afternoon", name:"Kim Dae-jung Library",                   note:"อดีตประธานาธิบดี · Nobel Peace Prize 2000 · นักต่อสู้ประชาธิปไตย",           tags:["history"],             mapKey:"Kim Dae-jung Library" },
    { time:"18:00", tc:"evening",   name:"เว้นว่าง / Seoul Battleship Park",        note:"เรือรบปลดประจำการริมแม่น้ำ · บรรยากาศสงครามเย็น",                             tags:[],                      mapKey:"Seoul Battleship Park" },
  ]}]
},

// ── 21 พ.ค. ──────────────────────────────────────────────────
{
  id:"d21", label:"21 พ.ค.", gwangju:false,
  date:"วันที่ 21 พ.ค. (พฤหัส)", title:"โซล · 🎙️ Speaker + An Jung-geun + บ้านบลูเฮาส์",
  sections:[{ rows:[
    { time:"เช้า",   tc:"morning",   name:"Park Jong-cheol Memorial Center",        note:"นักศึกษาถูกทรมานจนเสียชีวิต 1987 · ระเบิดการประท้วงนำสู่ประชาธิปไตย · ยืนยันนัด", tags:["speaker","history","protest"], mapKey:null },
    { time:"บ่าย",   tc:"afternoon", name:"An Jung-geun Memorial Museum",           note:"ฆาตกร Ito Hirobumi 1909 · วีรบุรุษต่อต้านอาณานิคม",                          tags:["history"],             mapKey:"An Jung-geun Memorial Museum" },
    { time:"15:00",  tc:"afternoon", name:"Cheong Wa Dae (บ้านบลูเฮาส์)",           note:"เปิดให้เข้าชม 2022 · อดีตทำเนียบประธานาธิบดี 74 ปี",                         tags:["history","protest"],   mapKey:"Cheong Wa Dae (บ้านบลูเฮาส์)" },
    { time:"17:00",  tc:"evening",   name:"เว้นว่าง",                               note:"—",                                                                           tags:[],                      mapKey:null },
  ]}]
},

// ── 22 พ.ค. ──────────────────────────────────────────────────
{
  id:"d22", label:"22 พ.ค.", gwangju:false,
  date:"วันที่ 22 พ.ค. (ศุกร์)", title:"โซล · Park Chung-hee + Yonsei + April 19 + Noryangjin",
  sections:[{ rows:[
    { time:"09:30", tc:"morning",   name:"Park Chung-hee Presidential Library",    note:"พิพิธภัณฑ์ยุคเผด็จการพัฒนา · วิเคราะห์สองด้าน",                               tags:["history"],             mapKey:"Park Chung-hee Presidential Library" },
    { time:"11:30", tc:"morning",   name:"April 19th National Cemetery (4·19)",   note:"สุสานผู้เสียชีวิต Revolution 1960 ล้มอีซึงมัน · ฟรี",                          tags:["history","protest"],   mapKey:null },
    { time:"13:00", tc:"afternoon", name:"🌶️ ต๊อกบ๊อกกี #8 — Sinchon/Yonsei Area", note:"ย่านมหาวิทยาลัย Yonsei · สไตล์นักศึกษา",                                     tags:["food"],                mapKey:null },
    { time:"14:30", tc:"afternoon", name:"Yonsei University — เดินชม campus",       note:"แหล่งกำเนิดขบวนการ 4·19 · campus เก่าแก่",                                   tags:["history","protest"],   mapKey:null },
    { time:"16:00", tc:"afternoon", name:"Noryangjin Fisheries Wholesale Market",  note:"ตลาดปลาใหญ่โซล · เลือกซีฟู้ดสด → ให้ร้านปรุง · ประสบการณ์ไม่ควรพลาด",       tags:["food"],                mapKey:null },
    { time:"18:00", tc:"evening",   name:"เว้นว่าง",                               note:"—",                                                                           tags:[],                      mapKey:null },
  ]}]
},

// ── 23 พ.ค. ──────────────────────────────────────────────────
{
  id:"d23", label:"23 พ.ค.", gwangju:false,
  date:"วันที่ 23 พ.ค. (เสาร์)", title:"DMZ · แนวพรมแดน + เกาหลีเหนือ",
  sections:[{ rows:[
    { time:"07:30", tc:"transit",   name:"ออกจากโรงแรม · รวมทัวร์ DMZ",            note:"จุดนัดพบ tour operator · ย่าน Insadong/Myeongdong",                           tags:["transit"],             mapKey:null },
    { time:"09:00", tc:"morning",   name:"Imjingak Park + Freedom Bridge",          note:"จุดเหนือสุดที่พลเรือนเข้าได้ · อนุสาวรีย์ผู้ลี้ภัย · รถไฟเก่าที่หยุดอยู่",    tags:["nk","history"],        mapKey:null },
    { time:"10:30", tc:"morning",   name:"3rd Infiltration Tunnel",                 note:"อุโมงค์ที่เกาหลีเหนือขุดลอดใต้พรมแดน · เดินลงได้ · ใส่หมวกกันน็อค",         tags:["nk"],                  mapKey:null },
    { time:"12:00", tc:"afternoon", name:"Dora Observatory",                        note:"ชมวิวที่ใกล้เกาหลีเหนือที่สุด · กล้องส่องทางไกลเห็น Kaesong",                 tags:["nk"],                  mapKey:null },
    { time:"13:00", tc:"afternoon", name:"Dorasan Station",                         note:"สถานีสุดท้ายก่อนพรมแดน · 'Not the last station from the South'",               tags:["nk","history"],        mapKey:null },
    { time:"15:00", tc:"transit",   name:"กลับโซล ~15:00",                          note:"พักผ่อนหลังวันหนัก",                                                          tags:["transit"],             mapKey:null },
    { time:"18:00", tc:"evening",   name:"เว้นว่าง",                               note:"—",                                                                           tags:[],                      mapKey:null },
  ]}]
},

// ── 24 พ.ค. ──────────────────────────────────────────────────
{
  id:"d24", label:"24 พ.ค.", gwangju:false,
  date:"วันที่ 24 พ.ค. (อาทิตย์)", title:"โซล · National Museum + Itaewon + สรุปทริป",
  sections:[{ rows:[
    { time:"09:30", tc:"morning",   name:"National Museum of Korea (Yongsan)",     note:"ใหญ่ที่สุดในเกาหลี · ฟรี · 3–4 ชม. · ประวัติศาสตร์โบราณ→สมัยใหม่",           tags:["history"],             mapKey:null },
    { time:"13:00", tc:"afternoon", name:"🌶️ ต๊อกบ๊อกกี #9 — Itaewon Fusion (ปิดซีรี่ย์)", note:"ต๊อกบ๊อกกีฟิวชัน · ปิดซีรี่ย์ 9 เจ้า",                          tags:["food"],                mapKey:null },
    { time:"14:00", tc:"afternoon", name:"Itaewon — Haebangchon (HBC)",            note:"ย่านพหุวัฒนธรรมหลังสงคราม · ผู้ลี้ภัยเกาหลีเหนือ · ทหารต่างชาติ",            tags:["history","culture"],   mapKey:null },
    { time:"16:00", tc:"afternoon", name:"The Hyundai Seoul (Yeouido)",             note:"ห้างดีไซน์ระดับโลก · ของที่ระลึก · ช้อปปิ้งก่อนกลับ",                        tags:["culture"],             mapKey:null },
    { time:"19:00", tc:"evening",   name:"เตรียมกระเป๋า · draft บทความ",           note:"รวบรวมโน้ต · เขียน draft ซีรี่ย์ต๊อกบ๊อกกี",                                   tags:[],                      mapKey:null },
  ]}]
},

// ── 25 พ.ค. ──────────────────────────────────────────────────
{
  id:"d25", label:"25 พ.ค.", gwangju:false,
  date:"วันที่ 25 พ.ค. (จันทร์)", title:"โซล → ICN → BKK · กลับบ้าน",
  sections:[{
    hotel:{ title:"✈️ KE 659 · Incheon (ICN) 19:45 → Bangkok (BKK) 23:35", body:"ออกจากโรงแรมไม่เกิน 16:00 · เผื่อเวลาที่สนามบิน 3 ชม." },
    rows:[
      { time:"เช้า",   tc:"morning",  name:"เช้าสุดท้ายในโซล",        note:"กาแฟ · เดินเล่น · ซื้อของฝาก",                                 tags:["culture"],    mapKey:null },
      { time:"15:30",  tc:"transit",  name:"เช็คเอาท์ + AREX สู่อินชอน", note:"Express ~43 นาที · ₩9,500",                                tags:["transit"],    mapKey:null },
      { time:"16:30",  tc:"transit",  name:"Incheon Airport (ICN)",     note:"เช็คอิน KE659 · ผ่านตรวจ · Duty Free",                       tags:["transit"],    mapKey:null },
      { time:"19:45",  tc:"transit",  name:"KE 659 ออก · ICN → BKK",   note:"ถึงสุวรรณภูมิ 23:35",                                        tags:["transit"],    mapKey:null },
    ]
  }]
},

]; // end DAYS
