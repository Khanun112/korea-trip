# ก้าวก่อนเปลี่ยน — ตามรอยต่อสู้ประชาชนเกาหลี

ตารางทริปเกาหลี 11–25 พฤษภาคม 2026  
Series: "ก้าวก่อนเปลี่ยน" / Seoul Political History Trip

## วิธีรันบน GitHub Pages

1. สร้าง repository ใหม่บน GitHub (ชื่ออะไรก็ได้ เช่น `korea-trip`)
2. upload ไฟล์ทั้งหมด 4 ไฟล์นี้ขึ้นไป:
   - `index.html`
   - `style.css`
   - `data.js`
   - `app.js`
3. ไปที่ **Settings → Pages → Branch: main → / (root) → Save**
4. รอ 1-2 นาที แล้วเข้าที่ `https://[username].github.io/[repo-name]/`

## วิธีแก้ไขข้อมูล

แก้ไขเฉพาะไฟล์ `data.js` เท่านั้น — ไม่ต้องยุ่งกับไฟล์อื่น

- เพิ่ม/ลบ slot → เพิ่ม/ลบ object ใน `rows[]`
- เพิ่มหมุดแผนที่ → เพิ่ม key ใน `MAP_PINS` ด้านบนของ `data.js`
- `tc` (time class): `morning` | `afternoon` | `evening` | `night` | `transit` | `conf` | `keynote`
- `tags`: `history` | `protest` | `culture` | `transit` | `food` | `nk` | `conf` | `speaker`

## โครงสร้างไฟล์

```
korea-trip/
├── index.html   ← โครงสร้างหน้าเว็บ
├── style.css    ← ดีไซน์ทั้งหมด
├── data.js      ← ✏️ ข้อมูลทริป (แก้ตรงนี้)
└── app.js       ← render engine (ไม่ต้องแก้)
```

## ช่องที่กรอกได้ในตาราง

- ✓ checklist — เช็คเมื่อไปแล้ว
- ใช้จ่าย — กรอก ₩ หรือ ฿
- โน้ต — บันทึกเพิ่มเติม

หมายเหตุ: ข้อมูลที่กรอกในช่องเหล่านี้จะหายเมื่อ refresh (ยังไม่มี local storage)
