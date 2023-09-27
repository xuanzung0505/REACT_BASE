// import { Dropdown, Menu, Space } from 'antd'
import './header.scss'
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
// import { readUserLocalStorage } from '@utils/localStorage'
// import { logout } from '@apps/slices/authSlice'
// import { useAppDispatch } from '@apps/hooks'
// import PrimaryButton from '@components/user/PrimaryButton/PrimaryButton'
// import { useCallback, useEffect, useState } from 'react'
// import { useLazyGetChallengeDetailQuery } from '@apps/services/user/challengeApi'
// import { ChallengeType } from '@globalTypes/user/Challenge'
// import { challengeTypeEnum } from 'enums/challengeEnum'

export default function Header (props: any) {
  // const Navigate = useNavigate()
  // const user = readUserLocalStorage()
  // const dispatch = useAppDispatch()
  // const handleMenuItemClick = (event: any) => {
  //   if (+event.key === 3) {
  //     dispatch(logout())
  //   }
  //   if (+event.key === 2) {
  //     Navigate('/history-exams')
  //   }
  //   if (+event.key === 1) {
  //     Navigate('/user-profile')
  //   }
  // }
  // const menu = (
  //   <Menu
  //     items={[
  //       {
  //         key: 1,
  //         label: 'Hồ sơ cá nhân'
  //       },
  //       {
  //         key: 2,
  //         label: 'Lịch sử hoạt động'
  //       },
  //       {
  //         key: 3,
  //         danger: true,
  //         label: 'Đăng xuất'
  //       }
  //     ]}
  //     onClick={handleMenuItemClick}
  //   />
  // )

  // const NavPages = [
  //   { title: 'Trang chủ', link: '/', className: 'home' },
  //   { title: 'Cuộc thi', link: '/competitive', className: 'competitive' },
  //   { title: 'Luyện tập', link: '/practice', className: 'practice' },
  //   { title: 'Bảng xếp hạng', link: '/ranking', className: 'ranking' }
  // ]

  // const location = useLocation()
  // const params = useParams()

  // const isActive = (link: string) => {
  //   return '/' + location.pathname.split('/')[1] === link
  // }

  return (
    <div className="header">
      {/* <nav className="nav">
        <Link to={'/'}>
          <img src="/images/logoVmo.png" alt="logo" title="logo" />
        </Link>
        {NavPages.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.link}
              className={`${item.className} ${
                isActive(item.link) ? 'active' : ''
              }`}
            >
              {item.title}
            </Link>
          )
        })}

        <div className="right">
          <Dropdown className="header" overlay={menu}>
            <a onClick={(e) => { e.preventDefault() }}>
              <Space>
                <div className="user">
                  <img src={user.avatar} alt="" className="avatar-img" />
                  <span>{user.name}</span>
                </div>
              </Space>
            </a>
          </Dropdown>
        </div>
      </nav> */}
    </div>
  )
}
