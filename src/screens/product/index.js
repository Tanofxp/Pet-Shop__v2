import React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

const Product = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);
    
    const addCartItem = () => {
        dispatch(addToCart(product));
    }

    const { id, title, description, price, weight } = product || {};
    return (
        <View style={styles.container}>
            <Image
                source={{uri: product.uri}}
                style={{width: 250, height: 250, marginTop:8, borderRadius:50,}}
            />
            <Text style={styles.title}>id: {id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>${price}</Text>
            <Text style={styles.text}>weight: {weight}</Text>
        <View style={styles.container}>
            <Button 
                title="Add to cart"
                onPress={addCartItem}

            />
        </View>
        </View>
    )
};

export default Product;