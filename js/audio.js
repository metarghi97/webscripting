// Array of audio items 
const audioFiles = [
  { title: "Quran Recitation - Surah Al-Fatiha (The Opening)", src: "audio/001.mp3" },
  { title: "Quran Recitation - Surah Al-Baqara (The Heifer, The Calf)", src: "audio/002.mp3" },
  { title: "Quran Recitation - Surah Al-i-Imran (The Family of Imran)", src: "audio/003.mp3" },
  { title: "Quran Recitation - Surah An-Nisa (The Women)", src: "audio/004.mp3" },
  { title: "Quran Recitation - Surah Al-Ma’ida (The Table Spread, The Table)", src: "audio/005.mp3" },
  { title: "Quran Recitation - Surah An-An’am (The Cattle)", src: "audio/006.mp3" },
  { title: "Quran Recitation - Surah Al-A’raf (The Heights)", src: "audio/007.mp3" },
  { title: "Quran Recitation - Surah Al-anfal", src: "audio/008-al-anfal.mp3" },
  { title: "Quran Recitation - Surah At-Tawba (The Repentance)", src: "audio/009-at-taubah.mp3" },
  { title: "Quran Recitation - Surah Yunus (Jonah)", src: "audio/010-yunus.mp3" },
  { title: "Quran Recitation - Surah Hud (Hud)", src: "audio/011-hud.mp3" },
  { title: "Quran Recitation - Surah Yusuf (Joseph)", src: "audio/012-yusuf.mp3" },
  { title: "Quran Recitation - Surah Ar-Ra’d (The Thunder)", src: "audio/013-ar-rad.mp3" },
  { title: "Quran Recitation - Surah Ibrahim (Abraham)", src: "audio/014-ibrahim.mp3" },
  { title: "Quran Recitation - Surah Al-Hijr (The Stoneland)", src: "audio/015-al-hijr.mp3" },
  { title: "Quran Recitation - Surah An-Nahl (The Honey Bee)", src: "audio/016-an-nahl.mp3" },
  { title: "Quran Recitation - Surah Al-Isra (The Night Journey)", src: "audio/017-al-isra.mp3" },
  { title: "Quran Recitation - Surah Al-Kahf (The Cave)", src: "audio/018-al-kahf (3).mp3" },
  { title: "Quran Recitation - Surah Maryam (Mary)", src: "audio/019-maryam.mp3" },
  { title: "Quran Recitation - Surah Ta-Ha (Ta-Ha)", src: "audio/020-ta-ha.mp3" },
  { title: "Quran Recitation - Surah Al-Anbiya (The Prophet)", src: "audio/021-al-anbiya.mp3" },
  { title: "Quran Recitation - Surah Al-Hajj (The Pilgrimage, The Hajj)", src: "audio/022-al-hajj.mp3" },
  { title: "Quran Recitation - Surah Al-Muminun (The Believers)", src: "audio/023-al-muminun.mp3" },
  { title: "Quran Recitation - Surah An-Noor (The Light)", src: "audio/024-an-nur.mp3" },
  { title: "Quran Recitation - Surah Al-Furqan (The Criterion)", src: "audio/025-al-furqan.mp3" },
  { title: "Quran Recitation - Surah Ash-Shu’ara (The Poets)", src: "audio/026-ash-shuara.mp3" },
  { title: "Quran Recitation - Surah An-Naml (The Ants)", src: "audio/027-an-naml.mp3" },
  { title: "Quran Recitation - Surah Al-Qasas (The Narrations, The Stories)", src: "audio/028-al-qasas.mp3" },
  { title: "Quran Recitation - Surah Al-Ankabut (The Spider)", src: "audio/029-al-ankabut.mp3" },
  { title: "Quran Recitation - Surah Ar-Rum (The Romans, The Byzantines)", src: "audio/030-ar-rum.mp3" },
  { title: "Quran Recitation - Surah Luqman (Luqman)", src: "audio/031-luqman.mp3" },
  { title: "Quran Recitation - Surah As-Sajda (The Prostration)", src: "audio/032-as-sajdah.mp3" },
  { title: "Quran Recitation - Surah Al-Ahzab (The Clans, The Combined Forces)", src: "audio/033-al-ahzab.mp3" },
  { title: "Quran Recitation - Surah Saba (Sheba)", src: "audio/034-saba.mp3" },
  { title: "Quran Recitation - Surah Fatir (The Originator)", src: "audio/035-fatir.mp3" },
  { title: "Quran Recitation - Surah Ya-Seen (Ya-Seen)", src: "audio/036-ya-sin.mp3" },
  { title: "Quran Recitation - Surah As-Saaffat (Those Who Set The Ranks)", src: "audio/037-as-saffat.mp3" },
  { title: "Quran Recitation - Surah Sad (The Letter Sad)", src: "audio/038-sad.mp3" },
  { title: "Quran Recitation - Surah Az-Zumar (The Crowds, The Troops)", src: "audio/039-az-zumar.mp3" },
  { title: "Quran Recitation - Surah Ghafir (The Forgiver)", src: "audio/040-ghafir.mp3" },
  { title: "Quran Recitation - Surah Fussilat (Expounded)", src: "audio/041-fussilat.mp3" },
  { title: "Quran Recitation - Surah Ash-Shura (The Consultation)", src: "audio/042-ash-shura.mp3" },
  { title: "Quran Recitation - Surah Az-Zukhruf (The Ornaments Of Gold)", src: "audio/043-az-zukhruf.mp3" },
  { title: "Quran Recitation - Surah Ad-Dukhan (The Smoke)", src: "audio/044-ad-dukhan.mp3" },
  { title: "Quran Recitation - Surah Al-Jathiya (The Kneeling Down ,Crouching)", src: "audio/045-al-jathiyah.mp3" },
  { title: "Quran Recitation - Surah Al-Ahqaf (Winding Sand-tracts)", src: "audio/046-al-ahqaf.mp3" },
  { title: "Quran Recitation - Surah Muhammad (Muhammad)", src: "audio/047-muhammad.mp3" },
  { title: "Quran Recitation - Surah Al-Fath (The Victory, Conquest)", src: "audio/048-al-fath.mp3" },
  { title: "Quran Recitation - Surah Al-Hujurat (The Private Apartments)", src: "audio/049-al-hujurat.mp3" },
  { title: "Quran Recitation - Surah Qaf (The Letter Qaf)", src: "audio/050-qaf.mp3" },
  { title: "Quran Recitation - Surah Adh-Dhariyat (The Wind That Scatter)", src: "audio/051-adh-dhariyat.mp3" },
  { title: "Quran Recitation - Surah At-Tur (The Mount)", src: "audio/052-at-tur.mp3" },
  { title: "Quran Recitation - Surah An-Najm (The Star)", src: "audio/053-an-najm.mp3" },
  { title: "Quran Recitation - Surah Al-Qamar (The Moon)", src: "audio/054-al-qamar.mp3" },
  { title: "Quran Recitation - Surah Ar-Rahman (The Most Gracious)", src: "audio/055-ar-rahman.mp3" },
  { title: "Quran Recitation - Surah Al-Waqia (The Inevitable)", src: "audio/056-al-waqiah.mp3" },
  { title: "Quran Recitation - Surah Al-Hadid (The Iron)", src: "audio/057-al-hadid.mp3" },
  { title: "Quran Recitation - Surah Al-Mujadila (The Pleading Woman)", src: "audio/058-al-mujadilah.mp3" },
  { title: "Quran Recitation - Surah Al-Hashr (The Gathering, Exile)", src: "audio/059-al-hashr.mp3" },
  { title: "Quran Recitation - Surah Al-Mumtahina (The Examined One)", src: "audio/060-al-mumtahanah.mp3" },
  { title: "Quran Recitation - Surah As-Saff (The Ranks, The Battle Array)", src: "audio/061-as-saff.mp3" },
  { title: "Quran Recitation - Surah Al-Jumuah (The Congregation, Friday)", src: "audio/062-al-jumuah.mp3" },
  { title: "Quran Recitation - Surah Al-Munafiqoon (The Hypocrites)", src: "audio/063-al-munafiqun.mp3" },
  { title: "Quran Recitation - Surah At-Taghabun (The Mutual Loss and Gain)", src: "audio/064-at-taghabun.mp3" },
  { title: "Quran Recitation - Surah At-Talaq (Divorce)", src: "audio/065-at-talaq.mp3" },
  { title: "Quran Recitation - Surah At-Tahrim (The Prohibition)", src: "audio/066-at-tahrim.mp3" },
  { title: "Quran Recitation - Surah Al-Mulk (The Dominion, Sovereignty, Control)", src: "audio/067-al-mulk.mp3" },
  { title: "Quran Recitation - Surah Al-Qalam (The Pen)", src: "audio/068-al-qalam.mp3" },
  { title: "Quran Recitation - Surah Al-Haaqqaa (The Sure Reality)", src: "audio/069-al-haqqah.mp3" },
  { title: "Quran Recitation - Surah Al-Maarij (The Ways of Ascent)", src: "audio/070-al-maarij.mp3" },
  { title: "Quran Recitation - Surah Nooh (Noah)", src: "audio/071-nuh.mp3" },
  { title: "Quran Recitation - Surah Al-Jinn (The Spirits, The Jinn ,The Demons)", src: "audio/072-al-jinn.mp3" },
  { title: "Quran Recitation - Surah Al-Muzzammil (The Enshrouded One)", src: "audio/073-al-muzammil.mp3" },
  { title: "Quran Recitation - Surah Al-Muddaththir (The Cloaked One)", src: "audio/074-al-muddaththir.mp3" },
  { title: "Quran Recitation - Surah Al-Qiyama (The Day of Ressurection)", src: "audio/075-al-qiyamah.mp3" },
  { title: "Quran Recitation - Surah Al-Insan (Man, Human)", src: "audio/076-al-insan.mp3" },
  { title: "Quran Recitation - Surah Al-Mursalat (Winds Sent Forth)", src: "audio/077-al-mursalat.mp3" },
  { title: "Quran Recitation - Surah An-Naba (The Great News)", src: "audio/078-an-naba.mp3" },
  { title: "Quran Recitation - Surah An-Naziat (Soul-snatchers)", src: "audio/079-an-naziat.mp3" },
  { title: "Quran Recitation - Surah AAbasa (He Frowned)", src: "audio/080-abasa.mp3" },
  { title: "Quran Recitation - Surah At-Takwir (The Folding Up, The Overthrowing)", src: "audio/081-at-takwir.mp3" },
  { title: "Quran Recitation - Surah Al-Infitar (The Cleaving Asunder, Bursting Apart)", src: "audio/082-al-infitar.mp3" },
  { title: "Quran Recitation - Surah Al-Mutaffifin (The Dealers in Fraud)", src: "audio/083-al-mutaffifin.mp3" },
  { title: "Quran Recitation - Surah Al-Inshiqaq (The Rending Asunder, The Sundering)", src: "audio/084-al-inshiqaq.mp3" },
  { title: "Quran Recitation - Surah Al-Burooj (The Mansions Of The Stars, Constellations)", src: "audio/085-al-buruj.mp3" },
  { title: "Quran Recitation - Surah At-Tariq (The Night-Visitant, The Nightcomer)", src: "audio/086-at-tariq.mp3" },
  { title: "Quran Recitation - Surah Al-Ala (Glory To Your Lord In The Highest)", src: "audio/087-al-ala.mp3" },
  { title: "Quran Recitation - Surah Al-Ghashiya (The Overwhelming Event)", src: "audio/088-al-ghashiyah.mp3" },    
  { title: "Quran Recitation - Surah Al-Fajr (The Break of Day, The Dawn)", src: "audio/089-al-fajr.mp3" },
  { title: "Quran Recitation - Surah Al-Balad (The City, This Countryside)", src: "audio/090-al-balad.mp3" },
  { title: "Quran Recitation - Surah Ash-Shams (The Sun)", src: "audio/091-ash-shams.mp3" },
  { title: "Quran Recitation - Surah Al-Lail (The Night)", src: "audio/092-al-lail.mp3" },
  { title: "Quran Recitation - Surah Ad-Dhuha (The Glorious Morning Light)", src: "audio/093-ad-duha.mp3" },
  { title: "Quran Recitation - Surah Al-Inshirah (Solace, Comfort)", src: "audio/094-ash-sharh.mp3" },
  { title: "Quran Recitation - Surah At-Tin (The Fig Tree)", src: "audio/095-at-tin.mp3" },
  { title: "Quran Recitation - Surah Al-Alaq (The Clinging Clot)", src: "audio/096-al-alaq.mp3" },
  { title: "Quran Recitation - Surah Al-Qadr (The Night Power)", src: "audio/097-al-qadr.mp3" },
  { title: "Quran Recitation - Surah Al-Bayyina (The Clear Proof, Evidence)", src: "audio/098-al-baiyyinah.mp3" },
  { title: "Quran Recitation - Surah Al-Zalzala (The Earthquake)", src: "audio/099-az-zalzalah.mp3" },
  { title: "Quran Recitation - Surah Al-Adiyat (The Chargers)", src: "audio/100-al-adiyat.mp3" },
  { title: "Quran Recitation - Surah Al-Qaria (The Striking Hour)", src: "audio/101-al-qariah.mp3" },
  { title: "Quran Recitation - Surah At-Takathur (Competition)", src: "audio/102-at-takathur.mp3" },
  { title: "Quran Recitation - Surah Al-Asr (The Time, The Declining Day)", src: "audio/103-al-asr.mp3" },
  { title: "Quran Recitation - Surah Al-Humaza (The Scandalmonger)", src: "audio/104-al-humazah.mp3" },
  { title: "Quran Recitation - Surah Al-Fil (The Elephant)	", src: "audio/105-al-fil.mp3" },
  { title: "Quran Recitation - Surah Quraysh (Quraish)", src: "audio/106-quraish.mp3" },
  { title: "Quran Recitation - Surah Al-Ma’un (The Neighbourly Assistance)", src: "audio/107-al-maun.mp3" },
  { title: "Quran Recitation - Surah Al-Kawthar (Abundance, Plenty)", src: "audio/108-al-kauthar.mp3" },
  { title: "Quran Recitation - Surah Al-Kafirun (Those Who Reject Faith, The Disbelievers)", src: "audio/109-al-kafirun.mp3" },
  { title: "Quran Recitation - Surah An-Nasr (The Help, Succour, Divine Support)", src: "audio/110-an-nasr.mp3" },
  { title: "Quran Recitation - Surah Al-Masadd (The Plaited Rope, The Palm Fibre)", src: "audio/111-al-masad.mp3" },
  { title: "Quran Recitation - Surah Al-Ikhlas (Purity of Faith, The Fidelity)", src: "audio/112-al-ikhlas.mp3" },
  { title: "Quran Recitation - Surah Al-Falaq (The Daybreak, Dawn)", src: "audio/113-al-falaq.mp3" },
  { title: "Quran Recitation - Surah Al-Nas (Mankind)", src: "audio/114-an-nas.mp3" },
];

// Get the container element
const audioListContainer = document.getElementById("audio-list");

// Enhanced audio player creation
function createAudioPlayer(audio) {
  const div = document.createElement("div");
  div.className = "audio-item";
  
  // Generate OGG path 
  const oggSrc = audio.src.replace('.mp3', '.ogg');
  
  div.innerHTML = `
    <h2>${audio.title}</h2>
    <audio controls preload="metadata">
      <source src="${oggSrc}" type="audio/ogg">
      <source src="${audio.src}" type="audio/mpeg">
      <p>Your browser does not support HTML5 audio.</p>
    </audio>
    <div class="player-status"></div>
  `;
  
  // Setup event listeners
  const audioElement = div.querySelector('audio');
  const statusElement = div.querySelector('.player-status');
  
  audioElement.addEventListener('error', () => {
    statusElement.textContent = 'Error loading audio';
    statusElement.className = 'error-message';
  });
  
  audioElement.addEventListener('playing', () => {
    statusElement.textContent = 'Playing...';
    statusElement.className = 'status-message';
  });
  
  audioElement.addEventListener('ended', () => {
    statusElement.textContent = '';
  });
  
  return div;
}

// Initialize players when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  audioFiles.forEach(audio => {
    audioListContainer.appendChild(createAudioPlayer(audio));
  });
});
