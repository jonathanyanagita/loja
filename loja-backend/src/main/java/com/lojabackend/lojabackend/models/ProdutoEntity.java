package com.lojabackend.lojabackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "produto")
public class ProdutoEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long codigo; 

    private String titulo;

    private String artista;

    private String img;

    private float preco;

    private int quantidade;

    private String detalhe;

    private String sobre;

    private String palavraChave; 

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getArtista() {
        return artista;
    }
    public void setArtista(String artista) {
        this.artista = artista;
    }
    public String getImg() {
        return img;
    }
    public void setImg(String img) {
        this.img = img;
    }
    public float getPreco() {
        return preco;
    }
    public void setPreco(float preco) {
        this.preco = preco;
    }
    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
    public String getDetalhe() {
        return detalhe;
    }
    public void setDetalhe(String detalhe) {
        this.detalhe = detalhe;
    }
    public String getSobre() {
        return sobre;
    }
    public void setSobre(String sobre) {
        this.sobre = sobre;
    }
    public String getPalavraChave() {
        return palavraChave;
    }
    public void setPalavraChave(String palavraChave) {
        this.palavraChave = palavraChave;
    }

    
    
    
}
