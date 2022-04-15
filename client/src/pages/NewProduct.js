import { productApi } from "apis/productApi";
import { useState } from "react";
import { uploadImage } from "utils";
export default function NewProduct() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    });
    const [image, setImage] = useState();
    async function handleSubmit() {
        if (image && product.name && product.price && product.description) {
            try {
                const url = await uploadImage("product", image);
                await productApi.createProduct({
                    ...product,
                    image: url,
                });
                document.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div>
            Tên:
            <input
                type="text"
                onChange={(event) =>
                    setProduct({ ...product, name: event.target.value })
                }
                className="border"
            />
            <br />
            Mô tả:
            <input
                type="text"
                onChange={(event) =>
                    setProduct({ ...product, description: event.target.value })
                }
                className="border"
            />
            <br />
            Giá:
            <input
                type="text"
                onChange={(event) =>
                    setProduct({ ...product, price: +event.target.value })
                }
                className="border"
            />
            <br />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
