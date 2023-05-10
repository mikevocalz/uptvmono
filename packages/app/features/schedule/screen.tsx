import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { ScrollView, Image } from 'app/design/TailwindComponents'
import { Platform, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'

import { DataTable, List } from 'react-native-paper';

export function ScheduleScreen() {
  const { width, height } = useWindowDimensions();
  const optionsPerPage = [2, 3, 4];

  const isWeb = Platform.OS === 'web'
  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);


  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);


  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const rowItem = () => {
    return (
      <DataTable.Row style={{ width: width, paddingLeft: 80, borderWidth: 0 }}>
        <DataTable.Cell>12AM</DataTable.Cell>
        <DataTable.Cell>Blue Bloods</DataTable.Cell>
        <DataTable.Cell >Growing Boys</DataTable.Cell>
      </DataTable.Row>
    )
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollEnabled
      nestedScrollEnabled
      contentContainerStyle={{
        width: width,
        alignItems: 'center',
        height: height
      }}
      className={` ${!isWeb ? 'bg-slate-600' : 'bg-transparent'} flex-1  min-h-screen w-screen `}>
      <H1>Welcome to Solito.</H1>


      <DataTable style={{
        flex: 1,
        width: '100%'
      }}>

        <List.AccordionGroup>

          <List.Accordion
            id="1"
            style={{
              width: width,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
            expanded={expanded}
            onPress={handlePress}
            title={rowItem()}
          >
            <DataTable.Header style={{ flex: 1, height: 400 }}>
              <DataTable.Title>
                <View />
              </DataTable.Title>
              <DataTable.Title style={{ marginLeft: -100, zIndex: 100, height: 221, width: 393, }}>
                <Image
                  className="rounded-xl h-[221px] w-[393px]  "
                  resizeMode="contain"
                  unoptimized
                  src={'https://uptv.com/wp-content/uploads/2022/07/blue-bloods-show-clean-1280x720-1-wpcf_393x221.jpg'}
                  alt="Hotel Photo"
                  width={393}
                  height={221}
                />
              </DataTable.Title>
              <DataTable.Title textStyle={{ textAlign: 'left', fontSize: 16 }} numberOfLines={4} >
                Frank orders Danny to hunt for a NYPD detective who is being held hostage by a Malaysian drug lord.
              </DataTable.Title>
            </DataTable.Header>
          </List.Accordion>

          <List.Accordion
            id="2"
            style={{
              height: '100%',
              width: width,
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
            expanded={expanded}
            onPress={handlePress}
            title={rowItem()}
          >
            <DataTable.Header style={{ flex: 1, height: 400 }}>
              <DataTable.Title>
                <View />
              </DataTable.Title>
              <DataTable.Title style={{ marginLeft: -100, zIndex: 100, height: 221, width: 393, backgroundColor: 'red' }}>
                <Image
                  className="rounded-xl  flex-1 "
                  resizeMode="contain"
                  unoptimized
                  src={'https://uptv.com/wp-content/uploads/2022/05/heartland-season-15-1280x720-1-wpcf_393x221.jpg'}
                  alt="Hotel Photo"
                  width={393}
                  height={221}
                />
              </DataTable.Title>
              <DataTable.Title textStyle={{ textAlign: 'left', fontSize: 16 }} numberOfLines={4} >
                Frank orders Danny to hunt for a NYPD detective who is being held hostage by a Malaysian drug lord.
              </DataTable.Title>
            </DataTable.Header>
          </List.Accordion>
        </List.AccordionGroup>

        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0
          }}
        />
      </DataTable>


    </ScrollView >
  )
}