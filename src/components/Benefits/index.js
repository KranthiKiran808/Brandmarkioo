import './index.css'
import {BiCoinStack} from 'react-icons/bi'
import {FiMessageSquare} from 'react-icons/fi'
import {CgInfinity} from 'react-icons/cg'
import {GiCrossedBones} from 'react-icons/gi'
import {FaRegCopyright} from 'react-icons/fa'
import BenefitItem from '../BenefitItem'

const benefitsList = [
  {
    id: 1,
    heading: 'No more designer anxiety',
    para: 'Get your logo instantly, not in weeks.',
    color: '#FB4570',
    imgUrl: <GiCrossedBones className="bicoinstack" />,
  },
  {
    id: 2,
    heading: 'Need a tweak to your design?',
    para: 'We’ll do it for you, absolutely free',
    color: 'lightgreen',
    imgUrl: <FiMessageSquare className="bicoinstack" />,
  },
  {
    id: 3,
    heading: 'No monthly charges',
    para: 'Pay once, get access to our branding tools forever.',
    color: 'lightblue',
    imgUrl: <BiCoinStack className="bicoinstack" />,
  },
  {
    id: 4,
    heading: 'Full copyright included',
    para: 'For use in commercial and personal projects.',
    color: '#ffa500',
    imgUrl: <FaRegCopyright className="bicoinstack" />,
  },
  {
    id: 5,
    heading: 'Unlimited revisions',
    para: 'Modify your logo at any time, even after purchase.',
    color: '#B19FF9',
    imgUrl: <CgInfinity className="bicoinstack" />,
  },
]

const Benefits = () => (
  <section>
    <ul className="benefit-container">
      {benefitsList.map(each => (
        <BenefitItem benefitItem={each} key={each.id} />
      ))}
    </ul>
  </section>
)

export default Benefits



