interface IPiuDTO {
  id: string;
  user_id: string;
  content: string;
  created_at: Date;
}

class Piu {
  public id: string;
  public user_id: string;
  public content: string;
  public created_at: Date;

  constructor({ id, user_id, content, created_at }: IPiuDTO) {
    this.id = id;
    this.user_id = user_id;
    this.content = content;
    this.created_at = created_at;
  }
}

export default Piu;