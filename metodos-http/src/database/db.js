import mongoose from 'mongoose';

async function connectDatabse(){
    await mongoose.connect(
        "mongodb+srv://backdev:hUtCljToYJtNxyH4@nodejsbd.47qqnn4.mongodb.net/?retryWrites=true&w=majority&appName=NodeJsbd"
    )
}

export default connectDatabse; // Exporta a função de conexão com o banco de dados