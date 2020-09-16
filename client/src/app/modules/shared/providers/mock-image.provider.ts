export function getRandomMockImage() {
    const randomFolderNumber = Math.floor(Math.random() * 3);
    const randomImageNumber = Math.floor(Math.random() * 4);
    const imageNames = [
        ['279.jpg', '443.jpg', '6648.jpg', '16617.jpg', '256336-P4ELJE-325.jpg'],
        ['1584.jpg', '2239.jpg', '4031.jpg', '5107.jpg', '23320.jpg', '537023-PJIXG6-560.jpg'],
        ['373.jpg', '3138.jpg', '3205.jpg', '3447.jpg', '13373.jpg'],
        ['8209.jpg', '9474.jpg', '9543.jpg', '14701.jpg', '2618284.jpg']
    ];

    const folderNames = ['distribution', 'food', 'manufacturing', 'retail'];
    return `assets/images/${folderNames[randomFolderNumber]}/${imageNames[randomFolderNumber][randomImageNumber]}`;
}
