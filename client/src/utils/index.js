import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import storage from "apis/firebase";
export function compareLocation(location, compare) {
    return location.includes(compare);
}

export const getRandomNumber = () => {
    return Math.floor(Math.random() * 90000) + 10000;
};

export const uploadImage = async (folder, file) => {
    try {
        const snapshot = await uploadBytes(
            ref(storage, `${folder}/${getRandomNumber() + file.name}`),
            file
        );
        const url = await getDownloadURL(snapshot.ref).then(
            (downloadURL) => downloadURL
        );
        return url;
    } catch (error) {
        console.log(error);
    }
};
