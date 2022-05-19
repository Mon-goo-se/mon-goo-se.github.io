var xhr = new XMLHttpRequest();
let songElements = document.getElementsByClassName('song');
function qom() {
  var answer = document.getElementById("answer").value;
  xhr.open("POST", "https://reblocked-1.gamk.repl.co/feedback");
  xhr.send("\"MusicalWays Song Request: " + answer + "\"");
  document.getElementById("send").innerHTML = "<p style='color:white'>Submitted</p>";
}
for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#00A0FF';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
	"songs": [
		{
			"name": "Boys will be bugs",
			"artist": "Cavetown",
			"url": "songs/Boys_Will_Be_Bugs_by_Cavetown_(Official_Audio)___Animal_Kingdom (1).m4a",
			"cover_art_url": "icons/boys will be bugs pic.jpg"
		},
		{
			"name": "Everything",
			"artist": "Blankenberge",
			"url": "songs/Blankenberge_-_Everything_(Music_Video).m4a",
			"cover_art_url": "icons/everything pic.jpg"
		},
		{
			"name": "Home",
			"artist": "Cavetown",
			"url": "songs/Cavetown_-_Home_[Official_Music_Video].m4a",
      "cover_art_url": "icons/home pic.jpg"
		},
		{
			"name": "Sweet Tooth",
			"artist": "Cavetown",
			"url": "songs/Cavetown_-_Sweet_Tooth_[Official_Music_Video].m4a",
      "cover_art_url": "icons/sweet tooth pic.jpg"
		},
		{
			"name": "Go for Liftoff",
			"artist": "Everyday Astronaut",
			"url": "songs/Everyday_Astronaut_-__Go_For_Liftoff_ (1).m4a",
			"cover_art_url": "icons/go for liftoff pic.jpg"
		},
		{
			"name": "Spaceships for Earth",
			"artist": "Everyday Astronaut",
			"url": "songs/Everyday_Astronaut_-__Spaceships_for_Earth_.m4a",
			"cover_art_url": "icons/spaceships for earth pic.jpg"
		},
		{
			"name": "Back in Time",
			"artist": "Healy",
			"url": "songs/Healy_-_Back_in_Time_(Visualizer)_ft._Public_Library_Commute (2).m4a",
			"cover_art_url": "icons/back in time pic.jpg"
		},
		{
			"name": "My Name is Trouble",
			"artist": "Nightmare of You",
			"url": "songs/Nightmare Of You - My Name is Trouble [Official Music Video].mp3",
			"cover_art_url": "icons/nightmare of you my name is trouble pic.jpg"
		},
		{
			"name": "Night Sky",
			"artist": "Krosia",
			"url": "songs/Krosia - Night Sky (feat. A.L.I.S.O.N).mp3",
      "cover_art_url": "icons/krosia night sky pic.jpg"
		},
		{
			"name": "The Sunshine Kid",
			"artist": "Superpink",
			"url": "songs/The Sunshine Kid.mp3",
      "cover_art_url": "icons/the sunshine kid pic.jpg"
		},
		{
			"name": "Life By The Sea",
			"artist": "Tubbo",
			"url": "songs/Tubbo - Life By The Sea (OFFICIAL VIDEO).mp3",
      "cover_art_url": "icons/life by the sea pic.jpg"
		},
		{
			"name": "Scarlet Fire",
			"artist": "Otis McDonald",
			"url": "songs/Scarlet Fire - Otis McDonald.mp3",
      "cover_art_url": "icons/scarlet fire pic.jpg"
		},
		{
			"name": "This is America, I Guess (Eugene Tsai Remix)",
			"artist": "Eugene Tsai",
			"url": "songs/This is America, I guess (Eugene Tsai Remix).mp3",
      "cover_art_url": "icons/this is america pic.jpg"
		},
		{
			"name": "So Good and so Tasty",
			"artist": "Ray Wonder",
			"url": "songs/So Good and so Tasty.mp3",
      "cover_art_url": "icons/so good and tasty pic.jpg"
		},
		{
			"name": "You Reposted in The Wrong Neighborhood",
			"artist": "Shokk Bloo",
			"url": "songs/You reposted in the wrong neighborhood (Full version).mp3",
      "cover_art_url": "icons/wrong neighborhood pic.jpg"
		},
		{
			"name": "Dear Maria as an Anime Intro",
			"artist": "Foxchase",
			"url": "songs/Dear Maria as an Anime Intro.mp3",
      "cover_art_url": "icons/dear maria pic.jpg"
		},
		{
			"name": "Fortunate Son",
			"artist": "Creedence Clearwater Revival",
			"url": "songs/Creedence Clearwater Revival - Fortunate Son (Official Lyric Video).mp3",
      "cover_art_url": "icons/fortunate son pic.jpg"
		},
		{
			"name": "You New Boyfriend",
			"artist": "Wilbur Soot",
			"url": "songs/Wilbur Soot - Your New Boyfriend (OFFICIAL VIDEO).mp3",
      "cover_art_url": "icons/your new boyfriend pic.jpg"
		},
		{
			"name": "Outro",
			"artist": "M83",
			"url": "songs/M83 - Outro.mp3",
      "cover_art_url": "icons/outro pic.jpg"
		},
    {
			"name": "Feeding the Family",
			"artist": "Spacey Jane",
			"url": "songs/Feeding the Family.mp3",
      "cover_art_url": "icons/feeding-the-family-pic.jpg"
		},
		{
			"name": "Welcome to the Black Parade",
			"artist": "My Chemical Romance",
			"url": "songs/Welcome to the Black Parade.mp3",
      "cover_art_url": "icons/welcome to the black parade pic.jpg"
		},
		{
			"name": "Happiness in Liquid Form",
			"artist": "Alfie Templeman",
			"url": "songs/Alfie Templeman- Happiness in Liquid Form (Official Lyric Video).mp3",
      "cover_art_url": "icons/happiness in liquid form.jpg"
		},
		{
			"name": "Head in the Clouds",
			"artist": "BabyJake",
			"url": "songs/BabyJake - Head In The Clouds (Official Visualizer).mp3",
      "cover_art_url": "icons/head in the clouds pic.jpg"
		},
		{
			"name": "Everybody Talks",
			"artist": "Neon Trees",
			"url": "songs/Everybody Talks.mp3",
      "cover_art_url": "icons/everybody talks pic.jpg"
		},
		{
			"name": "High",
			"artist": "JPB",
			"url": "songs/JPB - High [NCS Release].mp3",
      "cover_art_url": "icons/high pic.jpg"
		},
		{
			"name": "Here",
			"artist": "Alessia Cara",
			"url": "songs/Alessia Cara - Here.mp3",
      "cover_art_url": "icons/here pic.jpg"
		},
		{
			"name": "Broken",
			"artist": "Lund",
			"url": "songs/Lund - Broken (Lyrics).mp3",
      "cover_art_url": "icons/broken pic.jpeg"
		},
		{
			"name": "100 Bad Days",
			"artist": "AJR",
			"url": "songs/AJR  100 Bad Days Official Video.mp3",
      "cover_art_url": "icons/100 bad days pic.jpg"
		},
		{
			"name": "i can see clearly",
			"artist": "lil Darkie",
			"url": "songs/i can see clearly.mp3",
      "cover_art_url": "icons/i can see clearly pic.png"
		},
		{
			"name": "The Good Part",
			"artist": "AJR",
			"url": "songs/AJR - The Good Part (Official Video).mp3",
      "cover_art_url": "icons/the good part pic.jpg"
		},
		{
			"name": "Way Less Sad",
			"artist": "AJR",
			"url": "songs/AJR - Way Less Sad (Official Video).mp3",
      "cover_art_url": "icons/way less sad pic.jpg"
		},
		{
			"name": "Bang!",
			"artist": "AJR",
			"url": "songs/AJR - BANG! (Official Video).mp3",
      "cover_art_url": "icons/bang pic.png"
		},
    {
			"name": "Sober Up (feat. Rivers Cuomo)",
			"artist": "AJR",
			"url": "songs/AJR - Sober Up (feat. Rivers Cuomo) (Official Video).mp3",
      "cover_art_url": "icons/sober up pic.jpg"
		},
    {
			"name": "Weak",
			"artist": "AJR",
			"url": "songs/AJR - WEAK (Official Lyric Video).mp3",
      "cover_art_url": "icons/weak pic.jpg"
		},
    {
			"name": "Chamber of Reflections",
			"artist": "Mac DeMarco",
			"url": "songs/Mac DeMarco - Chamber of Reflection.mp3",
      "cover_art_url": "icons/chamber of reflection pic.jpg"
		},
    {
			"name": "Thats What Makes You Beautiful",
			"artist": "one Direction",
			"url": "songs/One Direction - What Makes You Beautiful (Official Video).mp3",
      "cover_art_url": "icons/What_Makes_You_Beautiful.jpg"
		}
	],
  "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
  waveforms: {
    sample_rate: 150
  }
});