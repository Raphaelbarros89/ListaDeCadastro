import { Avatar, Button, Icon, ListItem } from "@rneui/base";
import React from "react";
import { View, Text, FlatList, SafeAreaView, Alert } from "react-native";
import users from "../data/users";

export default props => {
 
    // Confirma se o usuário quer excluir
    function confirmUserDelete(user) {
        Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
            // Botoes que vão ser exibidos
            {
                text: "Sim ",
                onPress() {
                    console.warn("Delete" + user.id)
                }
            }, { text: "Não" }
        ])
    }
 
    // Ações
    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    icon={<Icon name="edit" size={25} color="orange" />}
                    type="clear"
                />
                <Button
                    onPress={() => confirmUserDelete(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }
 
    // Renderiza os usuários
    function getUserItem({ item: user }) {
        return (
            <ListItem
                onPress={() => props.navigation.navigate('UserForm', user)}
                bottomDivider
            >
                <Avatar title={user.name} source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content 
                    style={{ 
                        flexDirection: 'row', 
                        justifyContent: 'flex-end', 
                        flexGrow: 0.3 
                    }}
                >
                    {getActions(user)}
                </ListItem.Content>
            </ListItem>
        )
    }
 
    return (
        <SafeAreaView>
            <FlatList
                data={users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </SafeAreaView>
    )
}