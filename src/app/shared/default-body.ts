import { Prompt } from './prompt';

export const DEFAULT_BODY_PROMPTS: { [group: string]: Prompt[] } = {
  Types: [
    Prompt.create('giant'),
    Prompt.create('giantess'),
    Prompt.create('miniboy'),
    Prompt.create('minigirl'),
    Prompt.create('muscular'),
    Prompt.create('muscular female'),
    Prompt.create('plump'),
    Prompt.create('curvy'),
    Prompt.create('fat'),
    Prompt.create('skinny')
  ],
  Chest: [
    Prompt.create('flat chest'),
    Prompt.create('small breasts'),
    Prompt.create('medium breasts'),
    Prompt.create('large breasts'),
    Prompt.create('huge breasts'),
    Prompt.create('gigantic breasts'),
    Prompt.create('asymmetrical breasts'),
    Prompt.create('bouncing breasts'),
    Prompt.create('breasts apart'),
    Prompt.create('floating breasts'),
    Prompt.create('hanging breasts'),
    Prompt.create('perky breasts'),
    Prompt.create('sagging breasts'),
    Prompt.create('unaligned breasts'),
    Prompt.create('veiny breasts'),
    Prompt.create('pointy breasts'),
    Prompt.create('dark nipples'),
    Prompt.create('covered nipples'),
    Prompt.create('huge nipples'),
    Prompt.create('inverted nipples'),
    Prompt.create('long nipples'),
    Prompt.create('nipple slip'),
    Prompt.create('no nipples'),
    Prompt.create('puffy nipples'),
    Prompt.create('small nipples'),
    Prompt.create('areola slip'),
    Prompt.create('dark areolae'),
    Prompt.create('glands of montgomery'),
    Prompt.create('large areolae'),
    Prompt.create('light areolae'),
    Prompt.create('areola piercing'),
    Prompt.create('nipple piercing'),
    Prompt.create('nipple bar'),
    Prompt.create('nipple bells'),
    Prompt.create('nipple chain'),
    Prompt.create('nipple clamps'),
    Prompt.create('nipple leash'),
    Prompt.create('nipple rings'),
    Prompt.create('nipple tag'),
    Prompt.create('nipple tassels'),
    Prompt.create('large pectorals'),
    Prompt.create('huge pectorals'),
    Prompt.create('manboobs'),
    Prompt.create('Broad shoulders'),
    Prompt.create('Nape'),
    Prompt.create('Shoulder blades')
  ],
  Waist: [
    Prompt.create('abs'),
    Prompt.create('belly'),
    Prompt.create('midriff'),
    Prompt.create('navel'),
    Prompt.create('obliques'),
    Prompt.create('narrow waist'),
    Prompt.create('wide hips'),
    Prompt.create('love handles'),
    Prompt.create('dimples of venus'),
    Prompt.create('cameltoe'),
    Prompt.create('flat ass'),
    Prompt.create('huge ass'),
    Prompt.create('round ass'),
    Prompt.create('anal hair'),
    Prompt.create('anus'),
    Prompt.create('no anus'),
    Prompt.create('spread anus'),
    Prompt.create('tiny anus')
  ],
  'Female Genitals': [
    Prompt.create('Clitoris'),
    Prompt.create('Clitoris piercing'),
    Prompt.create('Clitoris ring'),
    Prompt.create('Erect clitoris'),
    Prompt.create('Cleft of venus'),
    Prompt.create('Labia'),
    Prompt.create('Fat mons'),
    Prompt.create('Dark labia'),
    Prompt.create('Long labia'),
    Prompt.create('Pubic hair'),
    Prompt.create('Pussy'),
    Prompt.create('No pussy'),
    Prompt.create('pubic hair'),
    Prompt.create('futanari')
  ],
  'Male Genitals': [
    Prompt.create('animal penis'),
    Prompt.create('dog penis'),
    Prompt.create('dolphin penis'),
    Prompt.create('horse penis'),
    Prompt.create('pig penis'),
    Prompt.create('dark penis'),
    Prompt.create('erection'),
    Prompt.create('flaccid'),
    Prompt.create('half-erect'),
    Prompt.create('girthy penis'),
    Prompt.create('glowing penis'),
    Prompt.create('knotted penis'),
    Prompt.create('mole on penis'),
    Prompt.create('penis piercing'),
    Prompt.create('penis tentacle'),
    Prompt.create('small penis'),
    Prompt.create('large penis'),
    Prompt.create('huge penis'),
    Prompt.create('gigantic penis'),
    Prompt.create('spiked penis'),
    Prompt.create('veiny penis'),
    Prompt.create('multiple penises'),
    Prompt.create('extra penises'),
    Prompt.create('pseudopenis'),
    Prompt.create('foreskin'),
    Prompt.create('phimosis'),
    Prompt.create('small testicles'),
    Prompt.create('large testicles'),
    Prompt.create('huge testicles'),
    Prompt.create('gigantic testicles'),
    Prompt.create('sagging testicles'),
    Prompt.create('veiny testicles')
  ],
  Wings: [
    Prompt.create('Large wings'),
    Prompt.create('Mini wings'),
    Prompt.create('Angel wings'),
    Prompt.create('Demon wings'),
    Prompt.create('Dragon wings'),
    Prompt.create('Fairy wings'),
    Prompt.create('Insect wings'),
    Prompt.create('Butterfly wings'),
    Prompt.create('Dragonfly wings'),
    Prompt.create('Ladybug wings'),
    Prompt.create('Moth wings'),
    Prompt.create('Bat wings'),
    Prompt.create('Crystal wings'),
    Prompt.create('Energy wings'),
    Prompt.create('Fiery wings'),
    Prompt.create('Ice wings'),
    Prompt.create('Light hawk wings'),
    Prompt.create('Liquid wings'),
    Prompt.create('Artificial wings'),
    Prompt.create('Fake wings'),
    Prompt.create('Hair wings'),
    Prompt.create('Mechanical wings'),
    Prompt.create('Metal wings'),
    Prompt.create('Plant wings'),
    Prompt.create('Feathered wings'),
    Prompt.create('Black wings'),
    Prompt.create('Gradient wings'),
    Prompt.create('Red wings'),
    Prompt.create('White wings'),
    Prompt.create('Blue wings'),
    Prompt.create('Green wings'),
    Prompt.create('Brown wings'),
    Prompt.create('Transparent wings'),
    Prompt.create('Yellow wings'),
    Prompt.create('Pink wings'),
    Prompt.create('Rainbow wings'),
    Prompt.create('Grey wings'),
    Prompt.create('Ankle wings'),
    Prompt.create('Detached wings'),
    Prompt.create('Head wings'),
    Prompt.create('Low wings'),
    Prompt.create('Leg wings'),
    Prompt.create('Wrist wings'),
    Prompt.create('Wing ears'),
    Prompt.create('Winged arms')
  ],
  Tails: [
    Prompt.create('Demon tail'),
    Prompt.create('Dragon tail'),
    Prompt.create('Ghost tail'),
    Prompt.create('Pikachu tail'),
    Prompt.create('Snake head tail'),
    Prompt.create('Fiery tail'),
    Prompt.create('Bear tail'),
    Prompt.create('Rabbit tail'),
    Prompt.create('Cat tail'),
    Prompt.create('Cow tail'),
    Prompt.create('Deer tail'),
    Prompt.create('Dog tail'),
    Prompt.create('Ermine tail'),
    Prompt.create('Fox tail'),
    Prompt.create('Horse tail'),
    Prompt.create('Leopard tail'),
    Prompt.create('Lion tail'),
    Prompt.create('Monkey tail'),
    Prompt.create('Mouse tail'),
    Prompt.create('Pig tail'),
    Prompt.create('Sheep tail'),
    Prompt.create('Squirrel tail'),
    Prompt.create('Tiger tail'),
    Prompt.create('Wolf tail'),
    Prompt.create('Crocodilian tail'),
    Prompt.create('Fish tail'),
    Prompt.create('Scorpion tail'),
    Prompt.create('Snake tail'),
    Prompt.create('Tadpole tail')
  ],
  Injuries: [
    Prompt.create('blood'),
    Prompt.create('bleeding'),
    Prompt.create('blood on bandages'),
    Prompt.create('bruise'),
    Prompt.create('bruised eye'),
    Prompt.create('cuts'),
    Prompt.create('deep wound'),
    Prompt.create('head bump'),
    Prompt.create('missing eye'),
    Prompt.create('nosebleed'),
    Prompt.create('scar'),
    Prompt.create('scratches'),
    Prompt.create('stitches'),
    Prompt.create('scrape'),
    Prompt.create('sprain'),
    Prompt.create('stab'),
    Prompt.create('impaled'),
    Prompt.create('severed limb'),
    Prompt.create('amputee'),
    Prompt.create('track marks'),
    Prompt.create('paralysis'),
    Prompt.create('bandaid'),
    Prompt.create('bandaid on knee'),
    Prompt.create('bandaid on arm'),
    Prompt.create('bandaid on leg'),
    Prompt.create('bandaid on face'),
    Prompt.create('bandaid on cheek'),
    Prompt.create('bandaid on ear'),
    Prompt.create('bandaid on forehead'),
    Prompt.create('bandaid on nose'),
    Prompt.create('bandages'),
    Prompt.create('bandage on face'),
    Prompt.create('bandage over one eye'),
    Prompt.create('eyepatch'),
    Prompt.create('sarashi'),
    Prompt.create('sling (medical)')
  ]
};
