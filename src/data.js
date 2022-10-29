//Image files
import profileImg from 'assets/profile.jpg'
import iconShare from 'assets/share.png'
import iconZuri from 'assets/zuri.png'
import iconI4g from 'assets/I4G.png'
import iconDots from 'assets/dots.png'
import iconSlack from 'assets/slack.png'
import IconGithub from 'assets/github.png'
import IconCamera from 'assets/camera.png'

//Props
export const data = {
  shareIcon: iconShare,
  zuriIcon: iconZuri,
  ingressiveIcon: iconI4g,
  dotIcon: iconDots,
  cameraIcon: IconCamera,
  footerText: 'HNG Internship 9 Frontend Task',
  socials: [iconSlack, IconGithub],
  profile: {
    id: 'profile__img',
    img: profileImg,
    twitter: {
      id: 'twitter',
      user: '@_Kl3va_',
    },
    slack: {
      id: 'slack',
      user: 'Kl3va',
    },
  },
  links: [
    {
      id: '',
      text: 'Twitter Profile',
      link: 'https://twitter.com/_Kl3va_',
    },
    {
      id: 'btn__zuri',
      text: 'Zuri Team',
      link: 'https://training.zuri.team/',
    },
    {
      id: 'books',
      text: 'Zuri Books',
      link: 'http://books.zuri.team ',
    },
    {
      id: 'book__python',
      text: 'Python Books',
      link: 'https://books.zuri.team/python-for-beginners?ref_id=Kl3va',
    },
    {
      id: 'pitch',
      text: 'Background Check For Coders',
      link: 'https://background.zuri.team',
    },
    {
      id: 'book__design',
      text: 'Design Books',
      link: 'https://books.zuri.team/design-rules',
    },
  ],
}
