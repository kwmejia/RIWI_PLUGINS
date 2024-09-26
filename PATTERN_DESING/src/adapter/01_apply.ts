// Interfaz común para almacenamiento de archivos
interface FileStorage {
  storeFile(path: string, data: string): void;
}

class LocalFileStorage {
  saveFile(path: string, data: string): void {
    console.log(`Guardando archivo en el sistema local en ${path}`);
    // Lógica para guardar archivo localmente
  }
}

// Sistema de almacenamiento AWS S3
class S3Storage {
  uploadFile(bucket: string, key: string, data: string): void {
    console.log(`Subiendo archivo al bucket ${bucket} en la ruta ${key}`);
    // Lógica para subir archivo a S3
  }
}

// Adaptador para almacenamiento local
class LocalStorageAdapter implements FileStorage {
  private localStorage: LocalFileStorage;

  constructor(localStorage: LocalFileStorage) {
    this.localStorage = localStorage;
  }

  // Implementación del método unificado
  storeFile(path: string, data: string): void {
    this.localStorage.saveFile(path, data);
  }
}

// Adaptador para AWS S3
class S3StorageAdapter implements FileStorage {
  private s3Storage: S3Storage;

  constructor(s3Storage: S3Storage) {
    this.s3Storage = s3Storage;
  }

  // Implementación del método unificado
  storeFile(path: string, data: string): void {
    const bucket = "mi-bucket"; // Por ejemplo, usamos un bucket predefinido
    this.s3Storage.uploadFile(bucket, path, data);
  }
}

// Uso del Adaptador
const localStorageAdapter = new LocalStorageAdapter(new LocalFileStorage());
localStorageAdapter.storeFile("/local/path/file.txt", "Contenido del archivo");

const s3StorageAdapter = new S3StorageAdapter(new S3Storage());
s3StorageAdapter.storeFile("path/file.txt", "Contenido del archivo");

// Código cliente que usa ambos sistemas de manera unificada
function saveDocument(storage: FileStorage, path: string, content: string) {
  storage.storeFile(path, content);
}

saveDocument(localStorageAdapter, "/local/doc.txt", "Archivo local");
saveDocument(s3StorageAdapter, "s3/doc.txt", "Archivo en S3");
