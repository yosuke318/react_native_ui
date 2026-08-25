import React from "react";
import {
    Input,
    IconButton,
    Checkbox,
    Text,
    Box,
    VStack,
    HStack,
    Heading,
    Icon,
    Center,
    useToast,
    NativeBaseProvider
} from "native-base";
import type {IToastProps} from "native-base";
import {Feather, Entypo} from "@expo/vector-icons";

type TodoItem = {
    title: string;
    isCompleted: boolean;
};

const TodoList = () => {
    const instState: TodoItem[] = [{
        title: "Code",
        isCompleted: true
    }, {
        title: "Meeting with team at 9",
        isCompleted: false
    }, {
        title: "Check Emails",
        isCompleted: false
    }, {
        title: "Write an article",
        isCompleted: false
    }];
    const [list, setList] = React.useState<TodoItem[]>(instState);
    const [inputValue, setInputValue] = React.useState<string>("");
    const toast = useToast();

    const addItem = (title: string) => {
        if (title === "") {
            // status は NativeBase v2 由来のプロパティで v3 の IToastProps には存在しないが、
            // 実行時の引数を変えないためキャストして元のまま渡している
            toast.show({
                title: "Please Enter Text",
                status: "warning"
            } as IToastProps);
            return;
        }

        setList(prevList => {
            return [...prevList, {
                title: title,
                isCompleted: false
            }];
        });
    };

    const handleDelete = (index: number) => {
        setList(prevList => {
            const temp = prevList.filter((_, itemI) => itemI !== index);
            return temp;
        });
    };

    const handleStatusChange = (index: number) => {
        setList(prevList => {
            const newList = [...prevList];
            newList[index].isCompleted = !newList[index].isCompleted;
            return newList;
        });
    };

    return <Center w="100%">
        <Box maxW="300" w="100%">
            <Heading mb="2" size="md">
                Wednesday
            </Heading>
            <VStack space={4}>
                <HStack space={2}>
                    <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task"/>
                    <IconButton borderRadius="sm" variant="solid"
                                icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50"/>} onPress={() => {
                        addItem(inputValue);
                        setInputValue("");
                    }}/>
                </HStack>
                <VStack space={2}>
                    {list.map((item, itemI) => <HStack w="100%" justifyContent="space-between" alignItems="center"
                                                       key={item.title + itemI.toString()}>
                        <Checkbox isChecked={item.isCompleted} onChange={() => handleStatusChange(itemI)}
                                  value={item.title}></Checkbox>
                        <Text width="100%" flexShrink={1} textAlign="left" mx="2" strikeThrough={item.isCompleted}
                              _light={{
                                  color: item.isCompleted ? "gray.400" : "coolGray.800"
                              }} _dark={{
                            color: item.isCompleted ? "gray.400" : "coolGray.50"
                        }} onPress={() => handleStatusChange(itemI)}>
                            {item.title}
                        </Text>
                        <IconButton size="sm" colorScheme="trueGray"
                                    icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400"/>}
                                    onPress={() => handleDelete(itemI)}/>
                    </HStack>)}
                </VStack>
            </VStack>
        </Box>
    </Center>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <TodoList/>
            </Center>
        </NativeBaseProvider>
    );
};
