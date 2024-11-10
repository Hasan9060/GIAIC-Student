import Image from "next/image"
import profile from '../../public/images/profile2.png'

const ProfileImg = () => {
  return (
    <div>
      <Image src={profile} alt="profile image" width={500} height={500}></Image>
    </div>
  )
}

export default ProfileImg
