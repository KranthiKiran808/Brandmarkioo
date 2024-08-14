import './index.css'

import {CustomHeading} from './styledComponents'

const BenefitItem = props => {
  const {benefitItem} = props
  const {heading, para, imgUrl, color} = benefitItem
  console.log(benefitItem, heading, para, imgUrl)
  return (
    <div className="benefit-item-container">
      <div className="bicoinstack-container" style={{backgroundColor: color}}>
        {imgUrl}
      </div>
      <div className="custom-details">
        <CustomHeading color={color} size="30px" outline="true">
          {heading}
        </CustomHeading>
        <CustomHeading color={color} size="16px">
          {para}
        </CustomHeading>
      </div>
    </div>
  )
}

export default BenefitItem


