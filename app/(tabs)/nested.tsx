import CustomNavigator from "@/components/customNavigator";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Screen() {
  const [data, setData] = useState<string>("");
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    //console.log("handleSheetChanges", index);
  }, []);

  const onData = useCallback((data: string) => {
    setData(data);
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const onCanceled = useCallback(() => {}, []);
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text>Data: {data}</Text>
        <Button onPress={handlePresentModalPress} title="Pick" />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <CustomNavigator
            data={data}
            onData={onData}
            onCanceled={onCanceled}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    //alignItems: "center",
    //minHeight: 200,
  },
});
