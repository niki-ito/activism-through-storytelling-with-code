let subtitleArray1 = [];
let subtitleCueArray1 = [];

let subtitleArray2 = [];
let subtitleCueArray2 = [];

let subtitleArray3 = [];
let subtitleCueArray3 = [];

let subtitleArray4 = [];
let subtitleCueArray4 = [];

let index = 0;

//Show appropriate subtitle using the recorded time stamps 
// function timeSubtitles() {
//   for (let i = 0; i < subtitleCueArray1.length; i ++){
//     if (myAudio1.currentTime()>=subtitleCueArray1[i]){
//       index = i;
//     } 
//   }
// }

//Tool used to create time staps for the subtitles

// function mouseClicked() {
//   index = index + 1
//   console.log(myAudio.currentTime());
// }

// function showText() {
//   subtitle.html(subtitleArray1[index]);
// }

function incertText() {
  subtitleArray1.push("I remember actually making this", "certain thought recently <br>but at a certain point", "I start forgetting that I’m Asian", " or forgetting what I look like.", "Recently? Or… ", "No, I was realizing this recently<br> about my entire life", "forgetting what I look like and", "I disassociate a lot and I feel", "not embodied within my own self.", " I’ll see photos of me <br>and I’m like “That’s me”", " but a lot of the time I’m like", " “That’s not me.", " That’s just a character I’m playing in life”<br> kind of thing", " and my face and my mind<br> isn’t connected to that body.", " Because inside I feel so white ", "because I’d grown up around<br> so many white people ", "and that has made me forget that", " a lot of people assume<br> that I’m full Asian ", "just because I don’t know,", " I guess I look more ", "Japanese than white to a lot of people", " so a lot of people always<br> assume that I’m full.", " Whenever I look in the mirror ", "I have to really look at myself", " and I’m like “That’s me", " that’s me", "that’s me. I have that face.”", " And so that’s something I’m working on.", " Trying to remember or trying to identify ", "more with being Japanese", " and I feel that’s <br>something that’s been going on for… ", "five years? Probably", " ever since senior year of highschool", " because that’s when I changed my name.", " Okay. ", "So that was the first step of realizing.", " Because even though I am half white", " I don’t look half white", " and people always assume <br>that I’m Japanese", " and I feel like being half Japanese is ", "very much a part of my identity", " and so I need to lean into that more ", "because I feel I’ve neglected it", " for the other part of my life. ", "So a lot of that is why I want to ", "move to Japan and learn Japanese ", "and fully assimilate.", " But yeah.", "Being in Japan where everyone else", " looks like me", " and has dark eyes ", "and has dark hair", " and the thin eyes and <br>we all look very similar ", "and it’s very comforting for me. ", "Being from Hamilton<br> where there’s no Japanese people", " other than my mom,", "it always feels weird.", " And that’s why I like <br>being in Chinatown (NY)", "because there’s so many Asian people", " even though they are<br> all not technically Japanese", " I’m like “I like being here.”<br> You know.", " Yeah, like a sense of identity", " in terms of being Japanese lacks", " in terms of lacking the community, ", "I guess.", " But we have a strong community", "at our Buddhist temple", " where it’s majority Japanese people ", "because it’s a Japanese Buddhism", " and so that’s where I gained most of", " feeling like I’m Japanese ", "because of these people who are here.")
  subtitleArray2.push("So I’m very attached to smells", "and so there’s a lot of specific smells", "that I associate <br>with many different things.", "Like the bathroom in the beginning", "it kind of smelled like<br> my grandma’s bathroom", "and I’ll get really nostalgic about that.", "The smell of right<br> when you open <i>yakuruto</i>", "a specific memory in <br>my grandma’s apartment", "late at night, <br>they used to have", "a refrigerator next<br> to the toilet room", "and we would just walk down", "and I remember this specific feeling <br>of the wooden floors", "and her getting a <i>yakuruto</i> out <br>of the refrigerator for me", "and that smell, the wood floors", "also the cold refrigerator<br> and the opening of it.", "Ugh...", "And then we have blankets<br> at my<i> house</i> house", "that we have vacuum packed<br> just to keep for storage", "and they kind of still smell like<br> my grandma’s house of incense", "so I’m always smelling them.","Wow.<br> So your grandma that lives in Japan?","Yeah, in Japan.","Huh, is the incense from a…","I forget what you call it.","<i>Butsudan? Butsudan</i>. Ohh.","Yeah.","My grandma’s place has a butsudan too", "because my grandfather passed away<br> when I was born", "so we’ve always had a <i>butsudan</i><br> at my grandma’s place", "and we wouldn’t really have incense", "but there was a little bell <br>that we would always ring", "when we want to say something", "and then we would always give food.","Yeah.","So my grandma<br> passed away last summer.","In Japan? Yes.","So now they’re both in the shrine.","But my mom’s older sister", "they live in Saitama", "and so my grandma’s apartment<br> is in Yokosuka", "so they’re actually there now.","So they still kind of<br> go to that apartment.","They still have the apartment. ");
  subtitleArray3.push()
  subtitleArray4.push()

}

//add data of time stamp copied and pasted from console
function incertCue() {
  subtitleCueArray1.push(0,2.327777777777778,5.752721088435374,8.057301587301588,9.792993197278912,10.849501133786848,14.40795918367347,16.579024943310657,20.282607709750568,23.713356009070296,26.203696145124717,27.718798185941043,28.264467120181404,31.759070294784582,34.58609977324263,40.69294784580499,45.087324263038546,48.65739229024943,52.192630385487526,54.90936507936508,56.24451247165533,58.28786848072562,60.8072335600907,63.08859410430839,64.74301587301588,66.00269841269841,67.14047619047619,69.13739229024944,72.38818594104309,75.14555555555556,76.99154195011337,79.44124716553289,82.30891156462584,84.29421768707483,85.54229024943311,86.54655328798187,90.04115646258504,91.78845804988661,93.41385487528345,95.61975056689343,98.34809523809524,100.9951700680272,103.81639455782313,106.86401360544218,110.24251700680271,113.29013605442177,117.15045351473923,119.75108843537414,121.53902494331066,124.63888888888889,125.8927664399093,127.04215419501134,129.10292517006803,132.03444444444443,134.14165532879818,137.19507936507935,138.14709750566894,141.39208616780044,144.3468253968254,145.5600680272109,148.21875283446713,151.79462585034014,154.04115646258504,155.59689342403627,158.5458276643991,159.71843537414966,162.64414965986396,163.90383219954649,165.75562358276645,167.94410430839002,170.69566893424036,173.64460317460316)
  subtitleCueArray2.push(0,2.3684126984126985,4.969047619047619,7.865736961451248,10.419931972789115,12.718707482993198,14.378934240362812,19.06936507936508,22.66845804988662,25.164603174603176,28.66501133786848,30.476167800453513,32.9781179138322,36.670090702947846,38.87018140589569,43.06718820861678,44.51843537414966,49.06374149659864,53.86446712018141,56.72052154195011,58.71743764172336,62.16560090702948,63.66909297052154,67.4191156462585,68.42918367346938,71.2678231292517,72.27789115646259,75.01784580498867,78.16995464852607,81.76904761904763,85.61775510204082,89.91925170068028,93.11780045351473,94.61548752834467,95.51526077097506,98.51643990929705,101.51181405895692,106.56795918367347,108.5242403628118,110.61984126984127,114.22473922902495,116.01267573696146,118.6191156462585)
  subtitleCueArray3.push()
  subtitleCueArray4.push()
}

