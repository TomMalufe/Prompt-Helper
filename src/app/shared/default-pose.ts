import { Prompt } from './prompt';

export const DEFAULT_POSE_PROMPTS = {
  Posture: [
    Prompt.create('kneeling'),
    Prompt.create('on one knee'),
    Prompt.create('lying'),
    Prompt.create('crossed legs'),
    Prompt.create('fetal position'),
    Prompt.create('on back'),
    Prompt.create('on side'),
    Prompt.create('on stomach'),
    Prompt.create('sitting'),
    Prompt.create('butterfly sitting'),
    Prompt.create('crossed legs'),
    Prompt.create('figure four sitting'),
    Prompt.create('indian style'),
    Prompt.create('hugging own legs'),
    Prompt.create('lotus position'),
    Prompt.create('seiza'),
    Prompt.create('sitting on lap'),
    Prompt.create('sitting on person'),
    Prompt.create('straddling'),
    Prompt.create('thigh straddling'),
    Prompt.create('upright straddle'),
    Prompt.create('wariza'),
    Prompt.create('yokozuwari'),
    Prompt.create('standing'),
    Prompt.create('balancing'),
    Prompt.create('crossed legs'),
    Prompt.create('legs apart'),
    Prompt.create('standing on one leg'),
    Prompt.create('balancing'),
    Prompt.create('crawling'),
    Prompt.create('jumping'),
    Prompt.create('running'),
    Prompt.create('walking'),
    Prompt.create('wallwalking'),
    Prompt.create('all fours'),
    Prompt.create('top-down bottom-up'),
    Prompt.create('prostration'),
    Prompt.create('chest stand'),
    Prompt.create('cowering'),
    Prompt.create('crucifixion'),
    Prompt.create('faceplant'),
    Prompt.create('fighting stance'),
    Prompt.create('battoujutsu stance'),
    Prompt.create('full scorpion'),
    Prompt.create('reclining'),
    Prompt.create('squatting'),
    Prompt.create('stretching'),
    Prompt.create('superhero landing'),
    Prompt.create('upside-down'),
    Prompt.create('handstand'),
    Prompt.create('headstand'),
    Prompt.create('yoga'),
    Prompt.create('scorpion pose')
  ],
  'Head posture': [Prompt.create('head down'), Prompt.create('head tilt')],
  'Torso posture': [
    Prompt.create('arched back'),
    Prompt.create('bent back'),
    Prompt.create('bent over'),
    Prompt.create('leaning back'),
    Prompt.create('leaning forward'),
    Prompt.create('slouching'),
    Prompt.create('sway back'),
    Prompt.create('twisted torso')
  ],
  'Arm posture': [
    Prompt.create('arm behind back'),
    Prompt.create('arms behind back'),
    Prompt.create('arm up'),
    Prompt.create('arm behind head'),
    Prompt.create('victory pose'),
    Prompt.create('arms up'),
    Prompt.create('arms behind head'),
    Prompt.create('outstretched arm'),
    Prompt.create('outstretched arms'),
    Prompt.create('spread arms'),
    Prompt.create('arm at side'),
    Prompt.create('arms at sides'),
    Prompt.create('interlocked fingers'),
    Prompt.create('own hands clasped'),
    Prompt.create('own hands together'),
    Prompt.create('star hands')
  ],
  'Two hand gestures': [
    Prompt.create('air quotes'),
    Prompt.create('carry me'),
    Prompt.create('clenched hands'),
    Prompt.create('cupping hands'),
    Prompt.create('double finger gun'),
    Prompt.create('double v'),
    Prompt.create('fidgeting'),
    Prompt.create('finger counting'),
    Prompt.create('finger frame'),
    Prompt.create('fist bump'),
    Prompt.create('fist in hand'),
    Prompt.create('heart arms'),
    Prompt.create('heart hands'),
    Prompt.create('heart hands duo'),
    Prompt.create('heart hands trio'),
    Prompt.create('high five'),
    Prompt.create('horns pose'),
    Prompt.create('noogie'),
    Prompt.create('own hands clasped'),
    Prompt.create('palm-fist greeting'),
    Prompt.create('palm-fist tap'),
    Prompt.create('penetration gesture'),
    Prompt.create('pinky swear'),
    Prompt.create('rabbit pose'),
    Prompt.create('shadow puppet'),
    Prompt.create('steepled fingers'),
    Prompt.create('tsuki ni kawatte oshioki yo'),
    Prompt.create('x arms'),
    Prompt.create('x fingers')
  ],
  'One hand gestures': [
    Prompt.create('akanbe'),
    Prompt.create('beckoning'),
    Prompt.create('hair twirling'),
    Prompt.create('index finger raised'),
    Prompt.create('middle finger'),
    Prompt.create('pinky out'),
    Prompt.create('pointing'),
    Prompt.create('pointing at self'),
    Prompt.create('pointing at viewer'),
    Prompt.create('pointing down'),
    Prompt.create('pointing forward'),
    Prompt.create('pointing up'),
    Prompt.create('kamina pose'),
    Prompt.create('saturday night fever'),
    Prompt.create('shushing'),
    Prompt.create('slit throat (gesture)'),
    Prompt.create('thumbs down'),
    Prompt.create('thumbs up'),
    Prompt.create('crossed fingers'),
    Prompt.create('finger gun'),
    Prompt.create('finger heart'),
    Prompt.create('fox shadow puppet'),
    Prompt.create('inward v'),
    Prompt.create('shaka sign'),
    Prompt.create('two-finger salute'),
    Prompt.create('middle w'),
    Prompt.create('money gesture'),
    Prompt.create('ok sign'),
    Prompt.create('claw pose'),
    Prompt.create('facepalm'),
    Prompt.create('ohikaenasutte'),
    Prompt.create('open hand'),
    Prompt.create('reaching'),
    Prompt.create('salute'),
    Prompt.create('spread fingers'),
    Prompt.create('stop (gesture)'),
    Prompt.create('straight-arm salute'),
    Prompt.create('vulcan salute'),
    Prompt.create('waving'),
    Prompt.create('clenched hand'),
    Prompt.create('fig sign'),
    Prompt.create('paw pose'),
    Prompt.create('power fist'),
    Prompt.create('raised fist'),
    Prompt.create('beckoning'),
    Prompt.create('cunnilingus gesture'),
    Prompt.create('fellatio gesture'),
    Prompt.create('handjob gesture'),
    Prompt.create('hat tip'),
    Prompt.create('oral invitation'),
    Prompt.create('oral simulation'),
    Prompt.create('shocker (gesture)'),
    Prompt.create('stroking own chin'),
    Prompt.create('v over eye'),
    Prompt.create('v over mouth')
  ],
  'Leg posture': [
    Prompt.create('crossed ankles'),
    Prompt.create('legs folded'),
    Prompt.create('leg up'),
    Prompt.create('legs up'),
    Prompt.create('knees to chest'),
    Prompt.create('legs over head'),
    Prompt.create('leg lift'),
    Prompt.create('outstretched leg'),
    Prompt.create('split'),
    Prompt.create('pigeon pose'),
    Prompt.create('standing split'),
    Prompt.create('spread legs'),
    Prompt.create('watson cross'),
    Prompt.create('knees together feet apart'),
    Prompt.create('knees apart feet together'),
    Prompt.create('dorsiflexion'),
    Prompt.create('pigeon-toed'),
    Prompt.create('plantar flexion'),
    Prompt.create('tiptoes'),
    Prompt.create('tiptoe kiss')
  ],
  Poses: [
    Prompt.create('animal pose'),
    Prompt.create('rabbit pose'),
    Prompt.create('horns pose'),
    Prompt.create('paw pose'),
    Prompt.create('claw pose'),
    Prompt.create('archer pose'),
    Prompt.create("bras d'honneur"),
    Prompt.create('body bridge'),
    Prompt.create('contrapposto'),
    Prompt.create('dojikko pose'),
    Prompt.create('inugami-ke no ichizoku pose'),
    Prompt.create('letter pose'),
    Prompt.create('ojou-sama pose'),
    Prompt.create('saboten pose'),
    Prompt.create('symmetrical hand pose'),
    Prompt.create('victory pose'),
    Prompt.create('villain pose'),
    Prompt.create('zombie pose'),
    Prompt.create('air guitar'),
    Prompt.create('bowing'),
    Prompt.create('curtsey'),
    Prompt.create('hand glasses'),
    Prompt.create('heart tail'),
    Prompt.create('heart tail duo'),
    Prompt.create('kuji-in'),
    Prompt.create('orchid fingers'),
    Prompt.create('shrugging'),
    Prompt.create('toe-point')
  ],
  'Two character pose': [
    Prompt.create('ass-to-ass'),
    Prompt.create('back-to-back'),
    Prompt.create('belly-to-belly'),
    Prompt.create('cheek-to-breast'),
    Prompt.create('cheek-to-cheek'),
    Prompt.create('eye contact'),
    Prompt.create('face-to-face'),
    Prompt.create('forehead-to-forehead'),
    Prompt.create('head on chest'),
    Prompt.create('heads together'),
    Prompt.create('holding hands'),
    Prompt.create('leg lock'),
    Prompt.create('over the knee'),
    Prompt.create('nipple-to-nipple'),
    Prompt.create('noses touching'),
    Prompt.create('shoulder-to-shoulder'),
    Prompt.create('tail lock'),
    Prompt.create('arm hug'),
    Prompt.create('hug from behind'),
    Prompt.create('waist hug'),
    Prompt.create('hugging tail'),
    Prompt.create('wing hug')
  ],
  Foreplay: [
    Prompt.create('footjob'),
    Prompt.create('double footjob'),
    Prompt.create('implied footjob'),
    Prompt.create('cooperative footjob'),
    Prompt.create('shoejob'),
    Prompt.create('feet'),
    Prompt.create('licking foot'),
    Prompt.create('foot worship'),
    Prompt.create('smelling feet'),
    Prompt.create('frottage'),
    Prompt.create('dry humping'),
    Prompt.create('armpit sex'),
    Prompt.create('grinding'),
    Prompt.create('backjob'),
    Prompt.create('buttjob'),
    Prompt.create('cooperative grinding'),
    Prompt.create('kneepit sex'),
    Prompt.create('paizuri'),
    Prompt.create('autopaizuri'),
    Prompt.create('cooperative paizuri'),
    Prompt.create('handsfree paizuri'),
    Prompt.create('naizuri'),
    Prompt.create('paizuri over clothes'),
    Prompt.create('paizuri on lap'),
    Prompt.create('paizuri under clothes'),
    Prompt.create('perpendicular paizuri'),
    Prompt.create('stealth paizuri'),
    Prompt.create('straddling paizuri'),
    Prompt.create('thigh sex'),
    Prompt.create('groping'),
    Prompt.create('ass grab'),
    Prompt.create("grabbing another's breast"),
    Prompt.create('guided breast grab'),
    Prompt.create('pectoral grab'),
    Prompt.create('guided pectoral grab'),
    Prompt.create('nipple tweak'),
    Prompt.create('crotch grab'),
    Prompt.create('guided crotch grab'),
    Prompt.create('grabbing own breast'),
    Prompt.create('torso grab'),
    Prompt.create('hairjob'),
    Prompt.create('handjob'),
    Prompt.create('caressing testicles'),
    Prompt.create('double handjob'),
    Prompt.create('cooperative handjob'),
    Prompt.create('nursing handjob'),
    Prompt.create('cuddling handjob'),
    Prompt.create('reverse nursing handjob'),
    Prompt.create('reach-around'),
    Prompt.create('two-handed handjob'),
    Prompt.create('masturbation'),
    Prompt.create('clothed masturbation'),
    Prompt.create('crotch rub'),
    Prompt.create('building sex'),
    Prompt.create('pillow sex'),
    Prompt.create('teddy bear sex'),
    Prompt.create('table humping'),
    Prompt.create('female masturbation'),
    Prompt.create('futanari masturbation'),
    Prompt.create('implied masturbation'),
    Prompt.create('male masturbation'),
    Prompt.create('mutual masturbation'),
    Prompt.create('stealth masturbation'),
    Prompt.create('tail masturbation'),
    Prompt.create('tail'),
    Prompt.create('tail insertion'),
    Prompt.create('tail masturbation'),
    Prompt.create('tailjob'),
    Prompt.create('oral'),
    Prompt.create('anilingus'),
    Prompt.create('rusty trombone'),
    Prompt.create('breast sucking'),
    Prompt.create('cunnilingus'),
    Prompt.create('autocunnilingus'),
    Prompt.create('implied cunnilingus'),
    Prompt.create('fellatio'),
    Prompt.create('autofellatio'),
    Prompt.create('deepthroat'),
    Prompt.create('implied fellatio'),
    Prompt.create('irrumatio'),
    Prompt.create('cooperative fellatio'),
    Prompt.create('multiple penis fellatio'),
    Prompt.create('hug and suck'),
    Prompt.create('licking testicle'),
    Prompt.create('sitting on face'),
    Prompt.create('testicle sucking')
  ],
  'Sexual positions': [
    Prompt.create('69'),
    Prompt.create('doggystyle'),
    Prompt.create('bent over'),
    Prompt.create('prone bone'),
    Prompt.create('top-down bottom-up'),
    Prompt.create('spitroast'),
    Prompt.create('reverse spitroast'),
    Prompt.create('spooning'),
    Prompt.create('on side'),
    Prompt.create('girl on top'),
    Prompt.create('amazon position'),
    Prompt.create('cowgirl position'),
    Prompt.create('reverse cowgirl position'),
    Prompt.create('reverse upright straddle'),
    Prompt.create('upright straddle'),
    Prompt.create('boy on top'),
    Prompt.create('anvil position'),
    Prompt.create('folded / knees to chest / legs over head / legs up'),
    Prompt.create('missionary'),
    Prompt.create('mating press'),
    Prompt.create('suspended congress'),
    Prompt.create('reverse suspended congress'),
    Prompt.create('full nelson'),
    Prompt.create('piledriver')
  ],
  Bondage: [
    Prompt.create('bound arms'),
    Prompt.create('bound feet'),
    Prompt.create('bound legs'),
    Prompt.create('bound calves'),
    Prompt.create('bound knees'),
    Prompt.create('bound thighs'),
    Prompt.create('bound torso'),
    Prompt.create('bound wrists'),
    Prompt.create('box tie'),
    Prompt.create('frogtie'),
    Prompt.create('hogtie'),
    Prompt.create('separated arms'),
    Prompt.create('separated legs'),
    Prompt.create('separated wrists'),
    Prompt.create('shrimp tie'),
    Prompt.create('strappado'),
    Prompt.create('suspension'),
    Prompt.create('cuffs-to-collar')
  ],
  'Group Sex': [
    Prompt.create('group sex'),
    Prompt.create('bisexual'),
    Prompt.create('bisexual female'),
    Prompt.create('bisexual male'),
    Prompt.create('blue plate special'),
    Prompt.create('daisy chain'),
    Prompt.create('gangbang'),
    Prompt.create('double penetration'),
    Prompt.create('triple penetration'),
    Prompt.create('love train'),
    Prompt.create('cooperative fellatio'),
    Prompt.create('cooperative footjob'),
    Prompt.create('cooperative breast smother'),
    Prompt.create('orgy'),
    Prompt.create('reverse spitroast'),
    Prompt.create('spitroast'),
    Prompt.create('teamwork'),
    Prompt.create('threesome'),
    Prompt.create('MMF threesome'),
    Prompt.create('FFM threesome'),
    Prompt.create('MMM threesome'),
    Prompt.create('FFF threesome')
  ],
  Penetration: [
    Prompt.create('cervical penetration'),
    Prompt.create('covered penetration'),
    Prompt.create('deep penetration'),
    Prompt.create('inflation'),
    Prompt.create('cum inflation'),
    Prompt.create('big belly'),
    Prompt.create('enema'),
    Prompt.create('large insertion'),
    Prompt.create('stomach bulge'),
    Prompt.create('multiple insertions'),
    Prompt.create('nipple penetration'),
    Prompt.create('nosejob'),
    Prompt.create('object insertion'),
    Prompt.create('vaginal object insertion'),
    Prompt.create('anal object insertion'),
    Prompt.create('urethral insertion'),
    Prompt.create('sounding'),
    Prompt.create('fingering'),
    Prompt.create('anal fingering'),
    Prompt.create('prostate milking'),
    Prompt.create('fingering through clothes'),
    Prompt.create('fingering through panties'),
    Prompt.create('implied fingering'),
    Prompt.create('fisting'),
    Prompt.create('anal fisting'),
    Prompt.create('self fisting'),
    Prompt.create('sex'),
    Prompt.create('after sex'),
    Prompt.create('after anal'),
    Prompt.create('after buttjob'),
    Prompt.create('after fellatio'),
    Prompt.create('after fingering'),
    Prompt.create('after frottage'),
    Prompt.create('after insertion'),
    Prompt.create('after masturbation'),
    Prompt.create('after oral'),
    Prompt.create('after paizuri'),
    Prompt.create('after rape'),
    Prompt.create('after urethral'),
    Prompt.create('after vaginal'),
    Prompt.create('afterglow'),
    Prompt.create('clothed after sex'),
    Prompt.create('anal'),
    Prompt.create('double anal'),
    Prompt.create('imminent anal'),
    Prompt.create('pegging'),
    Prompt.create('triple anal'),
    Prompt.create('clothed sex'),
    Prompt.create('guided penetration'),
    Prompt.create('happy sex'),
    Prompt.create('imminent penetration'),
    Prompt.create('implied sex'),
    Prompt.create('navel sex'),
    Prompt.create('sex from behind'),
    Prompt.create('skull fucking'),
    Prompt.create('ear sex'),
    Prompt.create('penis in eye'),
    Prompt.create('tentacle sex'),
    Prompt.create('underwater sex'),
    Prompt.create('vaginal'),
    Prompt.create('after vaginal'),
    Prompt.create('double vaginal'),
    Prompt.create('imminent vaginal'),
    Prompt.create('triple vaginal')
  ]
};