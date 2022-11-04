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
      description: 'My twitter profile',
      link: 'https://twitter.com/_Kl3va_',
    },
    {
      id: 'btn__zuri',
      text: 'Zuri Team',
      description: 'Zuri team page',
      link: 'https://training.zuri.team/',
    },
    {
      id: 'books',
      text: 'Zuri Books',
      description: 'Books on design and coding from the zuri team',
      link: 'http://books.zuri.team ',
    },
    {
      id: 'book__python',
      text: 'Python Books',
      description:
        'Grab a copy of this python for beginners book. Available at a discount for early birds',
      link: 'https://books.zuri.team/python-for-beginners?ref_id=Kl3va',
    },
    {
      id: 'pitch',
      text: 'Background Check For Coders',
      description:
        'Test your coding skills and knowledge using this amazing tool',
      link: 'https://background.zuri.team',
    },
    {
      id: 'book__design',
      text: 'Design Books',
      description: 'Here is the best book on design from your favorite, zuri',
      link: 'https://books.zuri.team/design-rules',
    },
    {
      id: 'contact',
      text: 'Contact',
      description: 'You can contact me by following this link',
      link: '/contact',
    },
  ],
}

export const contactData = {
  heading: 'Contact Me',
  headerText: 'Hi there, contact me to ask me about anything you have in mind.',
  checkboxText:
    'You agree to providing your data to kl3va who may contact you.',

  btnInfo: {
    text: 'Send message',
    id: 'btn__submit',
  },
  inputFirstName: {
    label: 'First name',
    placeholder: 'Enter your first name',
    hint: 'Please enter your first name',
    name: 'firstName',
    id: 'first_name',
  },
  inputLastName: {
    label: 'Last name',
    placeholder: 'Enter your last name',
    hint: 'Please enter your last name',
    name: 'lastName',
    id: 'last_name',
  },
  inputEmail: {
    label: 'Email',
    placeholder: 'yourname@email.com',
    hint: 'Please enter your email',
    name: 'email',
    id: 'email',
  },
  inputMultiText: {
    label: 'Message',
    placeholder: "Send me a message and I'll reply you as soon as possible...",
    hint: 'Please enter a message',
    name: 'message',
    id: 'message',
  },
}
