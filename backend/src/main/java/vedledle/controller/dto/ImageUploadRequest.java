package vedledle.controller.dto;

import org.springframework.web.multipart.MultipartFile;
import vedledle.dao.model.Image;

import java.util.List;

public record ImageUploadRequest(List<Image> images) {
}
