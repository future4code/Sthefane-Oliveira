import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.6435-9/170998973_10219942792107367_1315569740529019363_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEY_4cODwCplcsRSwSKshdyeL2TYLSMCKp4vZNgtIwIqs8Wa2mC7h-GVnrhOQH_a3c&_nc_ohc=DA12R_GLBAkAX_pNGXS&tn=IEZus_lMvA4AQsoF&_nc_ht=scontent.fsjk2-1.fna&oh=d14cdaccdea9093a4838c5f8df29dc35&oe=615DF7B6" 
          nome="Sthefane" 
          descricao="Oi, eu sou a Sthefane. Sou estudante da Labenu. Adoro programar ."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      <div className="page-section-container">
        
        <PequenoCard 
          imagem="https://img2.gratispng.com/20180720/ixe/kisspng-computer-icons-email-icon-design-equipo-comercial-5b525b3cdb7d21.311695661532123964899.jpg" 
          nome="Email" 
          descricao="sthefane.nehamah@gmail.com" 
        />
        
        <PequenoCard 
          imagem="https://i.pinimg.com/736x/ba/67/c4/ba67c44d437af206e48a7f9f8048b870.jpg" 
          nome="endereço" 
          descricao="Rua Canarios" 
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="OliverHost" 
          descricao="gerente de relacionamento" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
