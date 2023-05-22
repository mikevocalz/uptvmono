import { Text, View, Image } from "app/design/TailwindComponents"
import { FC, useState } from "react"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Drawer } from 'react-native-paper';



const SideBar: FC<any> = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [active, setActive] = useState('');


  return (
    <>
      {showSidebar ? (

        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-8 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Icon

            name="close" size={40} color="#fff" />
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-13"
          fill="#fff"
          viewBox="0 0 100 80"
          width="35"
          height="35"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <View
        className={`top-0 shadow-3xl right-0 w-[50vw] bg-[#6b9d97]  p-10 px-2 pt-[130px] text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
      >
        <Drawer.Section
          style={{
            width: '45vw',
            gap: 8,

          }}
          showDivider={false}>
          <Drawer.Item
            label="Shows"
            active={active === 'first'}
            style={{
              backgroundColor: active === 'first' ? '#136f63' : '',
              paddingLeft: 20
            }}
            onPress={() => {
              setActive('first');
              setShowSidebar(!showSidebar)
            }}
          />
          <Drawer.Item
            label="Movies"
            active={active === 'second'}
            onPress={() => setActive('second')}
            style={{
              backgroundColor: active === 'second' ? '#136f63' : '',
              paddingLeft: 20
            }}
          />
          <Drawer.Item
            label="Schedule"
            active={active === 'third'}
            onPress={() => setActive('third')}
            style={{
              backgroundColor: active === 'third' ? '#136f63' : '',
              paddingLeft: 20
            }}
          />
          <Drawer.Item
            label="Find UPtv"
            active={active === 'fourth'}
            onPress={() => setActive('fourth')}
            style={{
              backgroundColor: active === 'fourth' ? '#136f63' : '',
              paddingLeft: 20
            }}
          />
          <Drawer.Item
            label="UPLift Someone"
            active={active === 'fifth'}
            onPress={() => setActive('fifth')}
            style={{
              backgroundColor: active === 'fifth' ? '#136f63' : '',
              paddingLeft: 20
            }}
          />

        </Drawer.Section>


      </View>
    </>
  )
}

export default SideBar