export const comments = JSON.parse(localStorage.getItem('comments')) || [];

export const getByCarId = (id) => {
    return comments.find(object => id === object.carId);
};

export const createComment = (carId, payload) => {
    const comment = Object.assign({}, payload, {carId});
    comments.push(comment);

    localStorage.setItem('comments', JSON.stringify(comments));
};
