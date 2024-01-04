import { Prompt } from './prompt';

export const DEFAULT_HAIR_PROMPTS: { [group: string]: Prompt[] } = {
  Length: [
    Prompt.create('very short hair'),
    Prompt.create('short hair'),
    Prompt.create('medium hair'),
    Prompt.create('long hair'),
    Prompt.create('very long hair'),
    Prompt.create('absurdly long hair'),
    Prompt.create('big hair'),
    Prompt.create('bald'),
    Prompt.create('bald girl')
  ],
  'Hair texture': [
    Prompt.create('curly hair'),
    Prompt.create('drill hair'),
    Prompt.create('twin drills'),
    Prompt.create('tri drills'),
    Prompt.create('hair flaps'),
    Prompt.create('messy hair'),
    Prompt.create('pointy hair'),
    Prompt.create('ringlets'),
    Prompt.create('spiked hair'),
    Prompt.create('straight hair'),
    Prompt.create('wavy hair')
  ],
  Color: [
    Prompt.create('aqua hair'),
    Prompt.create('black hair'),
    Prompt.create('blonde hair'),
    Prompt.create('blue hair'),
    Prompt.create('light blue hair'),
    Prompt.create('dark blue hair'),
    Prompt.create('brown hair'),
    Prompt.create('light brown hair'),
    Prompt.create('green hair'),
    Prompt.create('dark green hair'),
    Prompt.create('light green hair'),
    Prompt.create('grey hair'),
    Prompt.create('orange hair'),
    Prompt.create('pink hair'),
    Prompt.create('purple hair'),
    Prompt.create('light purple hair'),
    Prompt.create('red hair'),
    Prompt.create('white hair'),
    Prompt.create('multicolored hair'),
    Prompt.create('colored inner hair'),
    Prompt.create('colored tips'),
    Prompt.create('roots'),
    Prompt.create('gradient hair'),
    Prompt.create('print hair'),
    Prompt.create('rainbow hair'),
    Prompt.create('split-color hair'),
    Prompt.create('spotted hair'),
    Prompt.create('streaked hair'),
    Prompt.create('two-tone hair')
  ],
  Accessories: [
    Prompt.create('hair brush'),
    Prompt.create('hair dryer'),
    Prompt.create('shampoo'),
    Prompt.create('arrow through hair'),
    Prompt.create('bun cover'),
    Prompt.create('hairpods'),
    Prompt.create('chopsticks'),
    Prompt.create('comb'),
    Prompt.create('hair ornament'),
    Prompt.create('hair bell'),
    Prompt.create('hair bobbles'),
    Prompt.create('hair bow'),
    Prompt.create('hair ribbon'),
    Prompt.create('hairclip'),
    Prompt.create('hairpin'),
    Prompt.create('hair flower'),
    Prompt.create('hair tubes'),
    Prompt.create('kanzashi'),
    Prompt.create('hair tie'),
    Prompt.create('hairband'),
    Prompt.create('hair weapon'),
    Prompt.create('headband'),
    Prompt.create('knife in hair'),
    Prompt.create('scrunchie'),
    Prompt.create('wig')
  ],
  Fantasy: [
    Prompt.create('Cloud Hair'),
    Prompt.create('Chocolate Hair'),
    Prompt.create('Crystal Hair'),
    Prompt.create('Energy Hair'),
    Prompt.create('Feather Hair'),
    Prompt.create('Fiery hair'),
    Prompt.create('Glowing Hair'),
    Prompt.create('Intestine Hair'),
    Prompt.create('Liquid Hair'),
    Prompt.create('Mechanical Hair'),
    Prompt.create('Plant Hair'),
    Prompt.create('Prehensile hair'),
    Prompt.create('helicopter hair'),
    Prompt.create('tentacle hair'),
    Prompt.create('living hair'),
    Prompt.create('Snake Hair'),
    Prompt.create('Starry Hair')
  ],
  'Facial Hair': [
    Prompt.create('neckbeard'),
    Prompt.create('stroking beard'),
    Prompt.create('two-tone beard'),
    Prompt.create('braided beard'),
    Prompt.create('long beard'),
    Prompt.create('tied beard'),
    Prompt.create('very long beard'),
    Prompt.create('goatee'),
    Prompt.create('chops'),
    Prompt.create('sideburns'),
    Prompt.create('mustache'),
    Prompt.create('stubble'),
    Prompt.create('bearded girl')
  ],
  'Short styles': [
    Prompt.create('bob cut'),
    Prompt.create('inverted bob'),
    Prompt.create('bowl cut'),
    Prompt.create('buzz cut'),
    Prompt.create('chonmage'),
    Prompt.create('crew cut'),
    Prompt.create('flattop'),
    Prompt.create('okappa'),
    Prompt.create('pixie cut'),
    Prompt.create('undercut')
  ],
  'Medium styles': [Prompt.create('flipped hair'), Prompt.create('wolf cut')],
  'Long styles': [
    Prompt.create('cornrows'),
    Prompt.create('dreadlocks'),
    Prompt.create('hime cut'),
    Prompt.create('mullet')
  ],
  'Tied styles': [
    Prompt.create('bow-shaped hair'),
    Prompt.create('braid'),
    Prompt.create('braided bangs'),
    Prompt.create('front braid'),
    Prompt.create('side braid'),
    Prompt.create('french braid'),
    Prompt.create('crown braid'),
    Prompt.create('single braid'),
    Prompt.create('multiple braids'),
    Prompt.create('twin braids'),
    Prompt.create('low twin braids'),
    Prompt.create('tri braids'),
    Prompt.create('quad braids'),
    Prompt.create('flower-shaped hair'),
    Prompt.create('hair bun'),
    Prompt.create('braided bun'),
    Prompt.create('single hair bun'),
    Prompt.create('double bun'),
    Prompt.create('cone hair bun'),
    Prompt.create('doughnut hair bun'),
    Prompt.create('heart hair bun'),
    Prompt.create('triple bun'),
    Prompt.create('cone hair bun'),
    Prompt.create('hair rings'),
    Prompt.create('single hair ring'),
    Prompt.create('half updo'),
    Prompt.create('one side up'),
    Prompt.create('two side up'),
    Prompt.create('low-braided long hair'),
    Prompt.create('low-tied long hair'),
    Prompt.create('mizura'),
    Prompt.create('multi-tied hair'),
    Prompt.create('nihongami'),
    Prompt.create('ponytail'),
    Prompt.create('folded ponytail'),
    Prompt.create('front ponytail'),
    Prompt.create('high ponytail'),
    Prompt.create('short ponytail'),
    Prompt.create('side ponytail'),
    Prompt.create('split ponytail'),
    Prompt.create('star-shaped hair'),
    Prompt.create('topknot'),
    Prompt.create('twintails'),
    Prompt.create('low twintails'),
    Prompt.create('short twintails'),
    Prompt.create('uneven twintails'),
    Prompt.create('tri tails'),
    Prompt.create('quad tails'),
    Prompt.create('quin tails'),
    Prompt.create('twisted hair')
  ],
  'Tall styles': [
    Prompt.create('afro'),
    Prompt.create('huge afro'),
    Prompt.create('beehive hairdo'),
    Prompt.create('crested hair'),
    Prompt.create('pompadour'),
    Prompt.create('quiff'),
    Prompt.create('shouten pegasus mix mori')
  ],
  'Hair style features': [
    Prompt.create('bangs'),
    Prompt.create('arched bangs'),
    Prompt.create('asymmetrical bangs'),
    Prompt.create('bangs pinned back'),
    Prompt.create('blunt bangs'),
    Prompt.create('crossed bangs'),
    Prompt.create('diagonal bangs'),
    Prompt.create('dyed bangs'),
    Prompt.create('fanged bangs'),
    Prompt.create('hair over eyes'),
    Prompt.create('hair over one eye'),
    Prompt.create('long bangs'),
    Prompt.create('parted bangs'),
    Prompt.create('curtained hair'),
    Prompt.create('ribbon bangs'),
    Prompt.create('short bangs'),
    Prompt.create('swept bangs'),
    Prompt.create('hair between eyes'),
    Prompt.create('hair intakes'),
    Prompt.create('single hair intake'),
    Prompt.create('sidelocks'),
    Prompt.create('asymmetrical sidelocks'),
    Prompt.create('drill sidelocks'),
    Prompt.create('low-tied sidelocks'),
    Prompt.create('sidelocks tied back'),
    Prompt.create('single sidelock'),
    Prompt.create("widow's peak"),
    Prompt.create('lone nape hair')
  ],
  'Other styles': [
    Prompt.create('ahoge'),
    Prompt.create('heart ahoge'),
    Prompt.create('huge ahoge'),
    Prompt.create('antenna hair'),
    Prompt.create('heart antenna hair'),
    Prompt.create('comb over'),
    Prompt.create('hair pulled back'),
    Prompt.create('hair slicked back'),
    Prompt.create('mohawk'),
    Prompt.create('oseledets'),
    Prompt.create('hair down'),
    Prompt.create('hair up'),
    Prompt.create('sidecut'),
    Prompt.create('blunt ends')
  ]
};
